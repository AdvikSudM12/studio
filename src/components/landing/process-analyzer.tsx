'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleAnalyzeProcess } from '@/app/actions';

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
import { Loader2, Wand2 } from 'lucide-react';
import type { AnalyzeBusinessProcessesOutput } from '@/ai/flows/analyze-business-processes';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  description: z
    .string()
    .min(
      50,
      'Пожалуйста, предоставьте более подробное описание (минимум 50 символов).'
    )
    .max(5000, 'Описание не должно превышать 5000 символов.'),
});

export function ProcessAnalyzer() {
  const [result, setResult] = useState<AnalyzeBusinessProcessesOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setResult(null);
    const { data, error } = await handleAnalyzeProcess({
      businessProcessesDescription: values.description,
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
            <CardTitle>Анализатор бизнес-процессов</CardTitle>
            <CardDescription>
              Опишите текущий процесс, и AI предложит возможности для
              автоматизации.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание процесса</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Например: процесс обработки входящих заявок от клиентов, включая регистрацию, распределение между менеджерами и контроль исполнения..."
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
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Анализировать
            </Button>
          </CardFooter>
        </form>
      </Form>
      {result && (
        <CardContent>
          <Card>
            <CardHeader>
              <CardTitle>Результаты анализа</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
              <h3 className="font-semibold">
                Возможности для AI автоматизации:
              </h3>
              <p>{result.aiAutomationOpportunities}</p>
            </CardContent>
          </Card>
        </CardContent>
      )}
    </Card>
  );
}
