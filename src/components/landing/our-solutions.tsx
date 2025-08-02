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
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-xl mb-4">Как это работает:</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">1. Получение обращения клиента</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Зафиксировать запрос клиента и инициировать процесс.<br/><strong>Шаги:</strong> ИИ-оркестратор получает и анализирует запрос (текст, голос, email), выделяет ключевые элементы, формирует задачу для ИИ-агента и сохраняет обращение в БД.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">2. Сбор и уточнение информации</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Получить полное понимание идеи клиента.<br/><strong>Шаги:</strong> ИИ-агент формирует уточняющие вопросы, задает их клиенту, собирает и структурирует ответы, проводит доп. исследование. Оркестратор проверяет данные и передает их ИИ-архитектору.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">3. Планирование прототипа продукта</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Разработать архитектуру будущего продукта.<br/><strong>Шаги:</strong> ИИ-архитектор анализирует данные, разрабатывает архитектуру (модули, user flows, стек, диаграммы) и формирует прототип интерфейса.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">4. Составление списка задач и модулей</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Создать детализированный план реализации.<br/><strong>Шаги:</strong> ИИ-планировщик разбивает проект на модули и задачи, описывает функциональность, зависимости, присваивает приоритеты и создает временную шкалу.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">5. Оценка стоимости выполнения</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Рассчитать примерную стоимость разработки.<br/><strong>Шаги:</strong> ИИ-агент по оценке стоимости рассчитывает человеко-часы для каждой задачи, умножает на ставки специалистов и формирует итоговую смету с резервом.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">6. Формирование ТЗ и коммерческого предложения</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Подготовить финальные документы для клиента.<br/><strong>Шаги:</strong> ИИ-агент формирует подробное ТЗ (цели, требования, сценарии, архитектура) и КП (смета, сроки, условия), форматирует их и передает оркестратору.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg mb-2">7. Согласование и доработка</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Убедиться, что ТЗ и КП соответствуют ожиданиям клиента.<br/><strong>Шаги:</strong> ИИ-агент собирает обратную связь, оркестратор распределяет задачи по доработке между агентами и контролирует внесение изменений.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg mb-2">8. Финализация и передача</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Завершить и передать документы клиенту.<br/><strong>Шаги:</strong> ИИ-агент проверяет финальные версии, подготавливает их в нужном формате, а оркестратор передает клиенту и архивирует проект.</p>
                            </div>
                             <div>
                                <h4 className="font-semibold text-lg mb-2">9. Поддержка после передачи</h4>
                                <p className="text-muted-foreground"><strong>Цель:</strong> Обеспечить актуальность документов в процессе реализации.<br/><strong>Шаги:</strong> Оркестратор отслеживает запросы, распределяет задачи по доработке, а агенты вносят и согласовывают изменения.</p>
                            </div>
                        </div>
                    </div>
                     <div className="border-t pt-6">
                        <h3 className="font-semibold text-xl mb-4">Особенности работы ИИ-оркестратора</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li><strong>Координация:</strong> Управляет агентами для синхронного выполнения задач.</li>
                            <li><strong>Автоматизация:</strong> Все этапы максимально автоматизированы.</li>
                            <li><strong>Адаптивность:</strong> Использует обратную связь для улучшения процесса.</li>
                            <li><strong>Точность:</strong> Каждый агент специализируется на своей задаче.</li>
                            <li><strong>Хранение данных:</strong> Сохраняет историю изменений для прозрачности.</li>
                        </ul>
                    </div>
                    <div className="border-t pt-6">
                        <h3 className="font-semibold text-xl mb-4">Полезные советы</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Используйте чёткие формулировки, чтобы избежать недопонимания.</li>
                            <li>Регулярно проверяйте согласованность данных между агентами.</li>
                            <li>Включайте в КП прозрачную разбивку стоимости и сроков.</li>
                            <li>При недостатке данных ИИ-оркестратор должен делать разумные предположения и согласовывать их.</li>
                            <li>Храните все версии документов для анализа и отката изменений.</li>
                        </ul>
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
