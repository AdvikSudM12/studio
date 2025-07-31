import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section } from './section';
import { HeartPulse, Search, FileText, Code2, Users, Rocket, Link } from 'lucide-react';
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
    detailedDescription: `
      <div class="space-y-4">
        <div>
          <a href="https://cloud.emd.one/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
            Перейти на платформу
          </a>
        </div>
        <p class="text-sm text-muted-foreground">Это мощное решение для быстрого создания и внедрения сценариев автоматизации, интеграции систем и визуализации бизнес-процессов с помощью интуитивно понятного интерфейса.</p>
        
        <h4 class="font-semibold !mt-4">Административный портал</h4>
        <p class="text-xs text-muted-foreground">Единая система управления для всех приложений и инструментов в EMD Cloud.</p>
        
        <h4 class="font-semibold !mt-4">Сервис авторизации</h4>
        <p class="text-xs text-muted-foreground">Инструменты регистрации и авторизации для пользователей ваших приложений.</p>
        
        <h4 class="font-semibold !mt-4">Базы данных</h4>
        <p class="text-xs text-muted-foreground">Конструктор баз данных. Таблицы, галереи, канбан, календарь, списки и формы.</p>
        
        <h4 class="font-semibold !mt-4">Конструктор процессов</h4>
        <p class="text-xs text-muted-foreground">Визуальный конструктор алгоритмов. Триггеры, HTTP запросы, циклы, условия, JS код.</p>
        
        <h4 class="font-semibold !mt-4">Дашборды</h4>
        <p class="text-xs text-muted-foreground">Конструктор панелей и страниц для удобного мониторинга и управления данными.</p>
        
        <h4 class="font-semibold !mt-4">Чаты и CRM</h4>
        <p class="text-xs text-muted-foreground">Движок для чатов. Служба поддержки, групповые чаты, мессенджер и чаты с ИИ.</p>
        
        <h4 class="font-semibold !mt-4">API</h4>
        <p class="text-xs text-muted-foreground">Позволяет использовать EMD Cloud как полноценный бэкенд вашего приложения.</p>
        
        <h4 class="font-semibold !mt-4">Роли и доступы</h4>
        <p class="text-xs text-muted-foreground">Управление группами пользователей, настройка доступов к ресурсам.</p>
      </div>
    `
  },
  {
    icon: Users,
    title: 'Система управления {KAIZEN}',
    description:
      'Внедряем инновационную систему с AI-оркестратором и матрицей ответственности для прозрачного управления.',
    detailedDescription: `
      <div class="space-y-4">
        <div>
          <a href="https://kybernetix.ru/" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
            Био разработчика
          </a>
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
    detailedDescription: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Что планируем делать во втором этапе?</p>
        <ul class="list-disc list-inside text-muted-foreground text-sm space-y-1">
          <li>Возможность импорта/экспорта BPMN-схем.</li>
          <li>Визуализация процессов.</li>
          <li>Создание BPMN-оркестратора, полностью соот. требованиям BPMN 2.0 нотации.</li>
          <li>Система учёта опыта сотрудников — если сотрудник видит, что можно улучшить в процессах, нажимает на специальную кнопку "Репорт об проблеме или улучшении". Дальше, при проведении ретро, сотрудники не высасывают из пальца проблемы/идеи, а обсуждают уже существующие боли.</li>
          <li>Полный спектр интеграций с внешними сервисами.</li>
        </ul>
      </div>
    `
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
          <AccordionItem value={`item-${index}`} key={index} className="bg-background rounded-lg border-b-0 flex">
            <Card className="flex flex-col text-center hover:shadow-lg transition-shadow duration-300 bg-transparent border-0 h-full w-full">
              <CardHeader className="items-center pt-8">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <offering.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg flex items-center min-h-[3rem]">{offering.title}</CardTitle>
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
