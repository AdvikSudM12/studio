'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from './section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const stories = [
  {
    title: 'Финансовый рынок',
    description:
      'Анализ спроса на кредиты показал, что снижение ставки на 0.2% от основной дает прирост обращений в 12.7 раз.',
    metric: '12.7x',
    metricLabel: 'Прирост обращений',
    detailedDescription: `С помощью AI-моделей для анализа больших данных мы выявили, что незначительное, на первый взгляд, снижение процентной ставки по кредитам способно кратно увеличить количество заявок. Это позволило нашему клиенту оптимизировать кредитную политику, привлечь больше заемщиков и увеличить долю на рынке, минимизировав риски за счет точного прогнозирования поведения клиентов.`,
  },
  {
    title: 'Росатом «АтомМайнд»',
    description:
      'Система предсказания сбоев оборудования помогла снизить брак, сократить затраты на обслуживание и сэкономить миллионы.',
    metric: '61%',
    metricLabel: 'Снижение брака',
    detailedDescription: `Для "Росатома" была разработана и внедрена предиктивная система на основе AI, которая анализирует данные с датчиков оборудования в реальном времени. Алгоритмы машинного обучения прогнозируют возможные сбои и аномалии, позволяя проводить техническое обслуживание до возникновения критических поломок. Это не только сократило количество бракованной продукции на 61%, но и значительно снизило затраты на ремонт и простои.`,
  },
  {
    title: 'Ozon',
    description:
      'ИИ-модели компьютерного зрения для управления запасами повышают точность прогнозирования, сокращают издержки и увеличивают продажи.',
    metric: '25%',
    metricLabel: 'Точность прогноза (оценка)',
    detailedDescription: `Внедрение AI-моделей компьютерного зрения на складах Ozon позволило автоматизировать процесс инвентаризации и управления запасами. Системы распознают товары, их количество и расположение, что повышает точность данных и скорость обработки заказов. Это привело к сокращению издержек на хранение, уменьшению ошибок при комплектации и, как следствие, росту продаж за счет более эффективного управления ассортиментом.`,
  },
  {
    title: 'Андеррайтинг',
    description:
      'Российская компания с помощью аналогов BigQuery и Vertex AI сократила время на андеррайтинг с 3 дней до нескольких минут.',
    metric: '< 5 мин',
    metricLabel: 'Время на андеррайтинг',
    detailedDescription: `Процесс оценки кредитоспособности клиентов (андеррайтинг) был полностью трансформирован с помощью облачных AI-решений. Вместо ручного анализа, который занимал до трех дней, теперь используется AI-платформа, которая обрабатывает тысячи параметров и выдает решение за несколько минут. Это позволило компании в десятки раз ускорить выдачу кредитов, повысить качество скоринга и улучшить клиентский опыт.`,
  },
];

export const SuccessStories = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Успешные примеры</h2>
        <p className="text-lg text-muted-foreground mt-2">
          Реальные кейсы, демонстрирующие мощь AI в бизнесе.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <Card key={index} className="flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`} className="border-b-0">
                <CardHeader>
                  <CardTitle>{story.title}</CardTitle>
                  <CardDescription>{story.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="text-4xl font-extrabold text-primary">
                      {story.metric}
                    </div>
                    <div className="text-sm font-medium text-primary/80">
                      {story.metricLabel}
                    </div>
                  </div>
                  <AccordionTrigger className="text-primary hover:no-underline justify-center">
                    Узнать больше
                  </AccordionTrigger>
                </CardContent>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {story.detailedDescription}
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </Section>
  );
};
