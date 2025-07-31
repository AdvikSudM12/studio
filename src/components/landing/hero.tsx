import { Section } from './section';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <Section className="text-center">
      <div className="py-20 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-amber-400 to-primary">
          Навигатор по AI-трансформации бизнеса
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Доклад посвящен необходимости внедрения AI в бизнес-процессы компаний.
          Мы рассмотрим тенденции рынка, инструменты для аналитиков и наши
          решения для интеграции AI.
        </p>
        <Button size="lg">Узнать больше</Button>
      </div>
    </Section>
  );
};
