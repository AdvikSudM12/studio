import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle2, TrendingUp, Search, Pencil, Code, TestTube2, BarChart } from 'lucide-react';
import { Section } from './section';

const mvpSteps = [
    { day: 1, title: 'Гипотеза', description: 'Определить проблему, ЦА и сформулировать гипотезу.', icon: TrendingUp },
    { day: 2, title: 'Исследование', description: 'Создать портрет аудитории, изучить конкурентов, провести опросы.', icon: Search },
    { day: 3, title: 'Функционал', description: 'Определить минимальный набор функций и приоритизировать задачи.', icon: CheckCircle2 },
    { day: 4, title: 'Прототип', description: 'Создать кликабельный прототип и подготовить сценарии.', icon: Pencil },
    { day: 5, title: 'Разработка MVP', description: 'Реализовать ключевые функции (no-code/low-code) и настроить аналитику.', icon: Code },
    { day: 6, title: 'Тестирование', description: 'Запустить MVP для 10–50 пользователей и собрать обратную связь.', icon: TestTube2 },
    { day: 7, title: 'Анализ', description: 'Сравнить результаты с гипотезой и принять решение о дальнейших шагах.', icon: BarChart },
];


export const OurSolutions = () => {
  return (
    <Section className="bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Наши практические решения</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Проверенные подходы, которые ускоряют запуск проектов и минимизируют риски.
        </p>
      </div>
      <Tabs defaultValue="spec" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
          <TabsTrigger value="spec">Автоматизация ТЗ</TabsTrigger>
          <TabsTrigger value="mvp">MVP за 7 дней</TabsTrigger>
        </TabsList>
        <TabsContent value="spec" className="mt-8">
            <Card>
                <CardHeader>
                    <CardTitle>Автоматизация составления Технического Задания</CardTitle>
                    <CardDescription>От идеи к четкому ТЗ с помощью AI.</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Проблема</h3>
                        <p className="text-muted-foreground">Заказчики приходят с идеями, но не могут составить четкое ТЗ, что вызывает недопонимание, задержки и дорогостоящие переделки проекта.</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-lg mb-2">Решение</h3>
                        <p className="text-muted-foreground">Сервис, где заказчик отвечает на вопросы через форму или чат-бота. ИИ анализирует ответы, использует отраслевые шаблоны и генерирует структурированное ТЗ (цели, функционал, требования, критерии приемки).</p>
                    </div>
                    <div className="md:col-span-2">
                         <h3 className="font-semibold text-lg mb-2">Результат</h3>
                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg"><CheckCircle2 className="h-5 w-5 text-primary" /> Упрощен первичный контакт</div>
                            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg"><CheckCircle2 className="h-5 w-5 text-primary" /> Экономия времени</div>
                            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg"><CheckCircle2 className="h-5 w-5 text-primary" /> Меньше недопонимания</div>
                            <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg"><CheckCircle2 className="h-5 w-5 text-primary" /> Быстрый старт проектов</div>
                         </div>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="mvp" className="mt-8">
             <Card>
                <CardHeader>
                    <CardTitle>Быстрое тестирование идей: от идеи до MVP за 7 дней</CardTitle>
                    <CardDescription>Используем AI на каждом этапе для максимального ускорения.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {mvpSteps.map(step => (
                        <div key={step.day} className="flex items-start gap-4">
                           <div className="flex flex-col items-center">
                             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{step.day}</div>
                             {step.day < mvpSteps.length && <div className="h-8 w-px bg-border mt-1"></div>}
                           </div>
                           <div>
                            <h4 className="font-semibold">{step.title}</h4>
                            <p className="text-muted-foreground text-sm">{step.description} <span className="font-medium text-primary">ИИ помогает</span> анализировать тренды, соцсети, генерировать код и рекомендации.</p>
                           </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
};
