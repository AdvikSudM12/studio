import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from './section';

const stories = [
  {
    title: 'Финансовый рынок',
    description:
      'Анализ спроса на кредиты показал, что снижение ставки на 0.2% от основной дает прирост обращений в 12.7 раз.',
    image: 'https://placehold.co/600x400/334155/f59e0b?text=Finance',
    dataAiHint: 'finance analytics',
    metric: '12.7x',
    metricLabel: 'Прирост обращений',
  },
  {
    title: 'Росатом «АтомМайнд»',
    description:
      'Система предсказания сбоев оборудования помогла снизить брак, сократить затраты на обслуживание и сэкономить миллионы.',
    image: 'https://placehold.co/600x400/334155/f59e0b?text=Industry',
    dataAiHint: 'nuclear power',
    metric: '61%',
    metricLabel: 'Снижение брака',
  },
  {
    title: 'Ozon',
    description:
      'ИИ-модели компьютерного зрения для управления запасами повышают точность прогнозирования, сокращают издержки и увеличивают продажи.',
    image: 'https://placehold.co/600x400/334155/f59e0b?text=Logistics',
    dataAiHint: 'warehouse logistics',
    metric: '25%',
    metricLabel: 'Точность прогноза (оценка)',
  },
  {
    title: 'Андеррайтинг',
    description:
      'Российская компания с помощью аналогов BigQuery и Vertex AI сократила время на андеррайтинг с 3 дней до нескольких минут.',
    image: 'https://placehold.co/600x400/334155/f59e0b?text=Underwriting',
    dataAiHint: 'business meeting',
    metric: '< 5 мин',
    metricLabel: 'Время на андеррайтинг',
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((story, index) => (
          <Card key={index} className="flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover rounded-t-lg"
                data-ai-hint={story.dataAiHint}
              />
            </div>
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
              <CardDescription>{story.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <div className="text-4xl font-extrabold text-primary">
                  {story.metric}
                </div>
                <div className="text-sm font-medium text-primary/80">
                  {story.metricLabel}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};
