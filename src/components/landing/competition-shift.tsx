import { Users, Bot } from 'lucide-react';
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
          От соревнования людей к соревнованию бизнес-моделей.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Исторический контекст: конкуренция людей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Раньше успех компании зависел от квалификации, опыта и
              креативности сотрудников. Соревнование шло на уровне человеческих
              способностей: кто быстрее выполнит задачу, кто найдёт лучшее
              решение, кто придумает инновацию. Ключевым фактором успеха был
              уровень специалистов.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="text-primary" />
              Современная экономика: битва бизнес-моделей
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Сегодня конкуренция все чаще разворачивается не в плоскости
              «продукт против продукта», а «бизнес-модель против
              бизнес-модели». Искусственный интеллект становится ядром более
              эффективных, быстрых и адаптивных бизнес-моделей, позволяя
              сохранять лидерство и успешно адаптироваться к рынку.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
