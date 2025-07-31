import {
  Card,
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
    title: 'Аудит бизнес-процессов для выявления возможностей автоматизации',
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
    title: 'Готовый low-code инструмент {cloud.emd.one}',
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <offering.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{offering.title}</CardTitle>
              </div>
              <CardDescription className="pt-4">
                {offering.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
};
