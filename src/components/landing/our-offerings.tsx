import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from './section';
import { HeartPulse, Search, FileText, Code2, Users, Rocket } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const offerings = [
  {
    icon: HeartPulse,
    title: 'Поиск болей компаний и решение сложных задач',
    description:
      'Анализируем проблемные места, которые компания пыталась решить ранее, но безуспешно.',
    detailedDescription: 'Мы глубоко погружаемся в историю проблем, чтобы выявить корневые причины и предложить эффективные AI-решения, которые наконец-то сработают.'
  },
  {
    icon: Search,
    title: 'Аудит бизнес-процессов',
    description:
      'Проводим детальный анализ текущих процессов для определения зон, где AI может принести максимальную пользу.',
    detailedDescription: 'Наш аудит направлен на выявление узких мест, рутинных операций и возможностей для автоматизации, чтобы сократить издержки и повысить производительность.'
  },
  {
    icon: FileText,
    title: 'От идеи до ТЗ за минимальное время',
    description:
      'Используем AI-инструменты для быстрой и точной трансформации бизнес-идей в детализированные спецификации.',
    detailedDescription: 'Забудьте о долгих согласованиях. Наш подход позволяет генерировать четкие технические задания, понятные и заказчику, и разработчикам, экономя недели работы.'
  },
  {
    icon: Code2,
    title: 'Готовый low-code инструмент',
    description:
      'Предлагаем облачную платформу EMD Cloud для визуализации и автоматизации процессов без программирования.',
    detailedDescription: 'Это мощное решение для быстрого создания и внедрения сценариев автоматизации, интеграции систем и визуализации бизнес-процессов с помощью интуитивно понятного интерфейса.'
  },
  {
    icon: Users,
    title: 'Система управления {KAIZEN}',
    description:
      'Внедряем инновационную систему с AI-оркестратором и матрицей ответственности для прозрачного управления.',
    detailedDescription: `
      <div class="space-y-4">
        <div>
          <a href="https://kybernetix.ru/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">Био разработчика</a>
        </div>
        <div>
          <h4 class="font-semibold">Для кого подойдёт?</h4>
          <p class="text-muted-foreground text-sm">В первые итерации, мы ориентируемся на малый и средний бизнес, и на тех, кто не боится экспериментировать и применять новые технологии в своих бизнес-процессах. Дальше, после интеграции BPMN, ориентируемся на всех, кто использует автоматизацию в своих бизнес-процессах.</p>
        </div>
        <div>
          <h4 class="font-semibold">На чём построена система?</h4>
          <p class="text-muted-foreground text-sm">KAIZEN построен на LLM-оркестраторе (OpenAI), RAG-системе, матрице ответственности (RACI). Стек — NodeJS, Postgresql, Qdrant, Redis. Микросервисная архитектура. Возможность дописать свои плагины/модули. Мы учли плохой опыт Camunda — у нас есть режим сохранения состояние в режиме "Event Log".</p>
        </div>
        <div>
          <h4 class="font-semibold">Что будет включает в себя KAIZEN?</h4>
          <ul class="list-disc list-inside text-muted-foreground text-sm space-y-1">
            <li>Управление персоналом</li>
            <li>Учёт заказов/клиентов</li>
            <li>Трекер задач</li>
            <li>Просмотр процессов и активности LLM-оркестратора</li>
            <li>Матрица ответственности (RACI) в разрезе бизнесс-процесса и сотрудников</li>
            <li>Система аналитики и дашбордов</li>
            <li>Помощник "KAIZEN" — диалоговое окно для помощи в поиске в системе.</li>
            <li>Базовые интеграции с внешними сервисами.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    icon: Rocket,
    title: 'Развитие системы {KAIZEN}',
    description:
      'Планы на 2-й этап: импорт/экспорт BPMN, визуализация процессов, BPMN-оркестратор и многое другое.',
    detailedDescription: `Мы планируем добавить возможность импорта/экспорта BPMN-схем, продвинутую визуализацию, полноценный BPMN-оркестратор, систему учёта опыта сотрудников для непрерывных улучшений и полную интеграцию с внешними сервисами.
    <br/><br/>
    Система учёта опыта сотрудников — если сотрудник видит, что можно улучшить в процессах, нажимает на специальную кнопку "Репорт об проблеме или улучшении". Дальше, при проведении ретро, сотрудники не высасывают из пальца проблемы/идеи, а обсуждают уже существующие боли.`
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
      <Accordion type="single" collapsible className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {offerings.map((offering, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="bg-background rounded-lg border-b-0">
            <Card className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300 bg-transparent border-0 h-full">
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
              <AccordionTrigger className="text-primary hover:no-underline justify-center p-6 pt-0">
                  Узнать больше
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-left">
                  <div className="text-sm" dangerouslySetInnerHTML={{ __html: offering.detailedDescription }} />
                </AccordionContent>
            </Card>
           </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};
