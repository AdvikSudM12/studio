'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleGenerateSpec } from '@/app/actions';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2, FileText } from 'lucide-react';
import type { GenerateTechnicalSpecOutput } from '@/ai/flows/generate-technical-spec';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  idea: z
    .string()
    .min(
      50,
      'Пожалуйста, предоставьте более подробное описание (минимум 50 символов).'
    )
    .max(5000, 'Описание не должно превышать 5000 символов.'),
});

export function SpecGenerator() {
  const [result, setResult] = useState<GenerateTechnicalSpecOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      idea: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    const { data, error } = await handleGenerateSpec({
      businessIdea: values.idea,
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: error,
      });
    } else {
      setResult(data || null);
    }
  }

  return (
    <Card className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
            <CardTitle>Генератор технических спецификаций</CardTitle>
            <CardDescription>
              Опишите вашу бизнес-идею, и AI создаст структурированное ТЗ.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="idea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание бизнес-идеи</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Например: создать платформу для онлайн-обучения с геймификацией, где пользователи могут проходить курсы, получать награды и соревноваться друг с другом..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <FileText className="mr-2 h-4 w-4" />
              )}
              Сгенерировать ТЗ
            </Button>
          </CardFooter>
        </form>
      </Form>
      {result && (
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle>Сгенерированная спецификация</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                {result.technicalSpec}
            </CardContent>
          </Card>
        </CardContent>
      )}
    </Card>
  );
}
