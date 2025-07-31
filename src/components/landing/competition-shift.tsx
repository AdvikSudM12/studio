import { Users, Bot, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from './section';

export const CompetitionShift = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Сдвиг парадигмы в конкуренции
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          От соревнования людей к соревнованию бизнес-моделей и их оркестрации.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Как было: Конкуренция людей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Успех компании зависел от квалификации и опыта сотрудников.
              Соревнование шло на уровне человеческих способностей: кто
              быстрее выполнит задачу, кто найдёт лучшее решение. Ключевым
              фактором был уровень специалистов.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="text-primary" />
              Как стало: Битва бизнес-моделей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Конкуренция сместилась в плоскость «бизнес-модель против
              бизнес-модели». Искусственный интеллект стал ядром более
              эффективных и адаптивных бизнес-моделей, позволяя компаниям
              сохранять лидерство на рынке.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="text-primary" />
              Как надо: AI-оркестрация систем
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Будущее за компаниями, где AI не просто автоматизирует задачи, а
              оркестрирует всю бизнес-систему. Это — единая нейросеть,
              управляющая процессами, ресурсами и данными для достижения
              максимальной эффективности и гибкости.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
