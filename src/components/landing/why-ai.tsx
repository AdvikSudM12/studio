import { Gauge, BrainCircuit, Settings2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from './section';

export const WhyAi = () => {
  return (
    <Section className="bg-card">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Почему AI — это необходимость?</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Компании, игнорирующие ИИ, проигрывают по трем ключевым направлениям, теряя гибкость, точность прогнозов и возможность оптимизации затрат.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center bg-background">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <Gauge className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Скорость</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Мгновенный анализ данных и принятие решений в реальном времени, что критически важно для адаптации к рыночным изменениям.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center bg-background">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <BrainCircuit className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Глубина анализа</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Выявление скрытых закономерностей и инсайтов из огромных объемов данных, недоступных для человеческого анализа.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center bg-background">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <Settings2 className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Операционная эффективность</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Автоматизация рутинных задач, оптимизация процессов и сокращение издержек, что напрямую влияет на прибыльность.
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
