import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from './section';
import { HeartPulse, Search, FileText, Code2, Users } from 'lucide-react';

const offerings = [
  {
    icon: HeartPulse,
    title: 'Поиск болей компаний и решение сложных задач',
    description:
      'Анализируем проблемные места, которые компания пыталась решить ранее, но безуспешно, чтобы предложить эффективные AI-решения.',
  },
  {
    icon: Search,
    title: 'Аудит бизнес-процессов',
    description:
      'Проводим детальный анализ текущих процессов для определения зон, где AI может сократить издержки и повысить производительность.',
  },
  {
    icon: FileText,
    title: 'От идеи до ТЗ за минимальное время',
    description:
      'Используем AI-инструменты для быстрой и точной трансформации бизнес-идей в детализированные технические спецификации.',
  },
  {
    icon: Code2,
    title: 'Готовый low-code инструмент',
    description:
      'Предлагаем облачную платформу EMD Cloud для визуализации процессов, интеграции и создания сценариев автоматизации без программирования.',
  },
  {
    icon: Users,
    title: 'Система управления {KAIZEN}',
    description:
      'Внедряем инновационную систему с AI-оркестратором и матрицей ответственности для прозрачного и эффективного управления процессами.',
  },
];

export const OurOfferings = () => {
  return (
    <Section className="bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Что мы предлагаем
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Комплексные решения и подходы для интеграции искусственного интеллекта в ваши бизнес-процессы.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {offerings.map((offering, index) => (
          <Card key={index} className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="items-center pt-8">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <offering.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg h-12 flex items-center">{offering.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>
                {offering.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
        {/* Empty card to balance the grid if needed */}
         <div className="hidden lg:block lg:col-start-3"></div>
      </div>
    </Section>
  );
};