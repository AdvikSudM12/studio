import { Section } from './section';
import { BrainCircuit } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <Section className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold">AI Transformation Navigator</span>
          </div>
          <p className="text-center md:text-left text-sm text-muted-foreground max-w-2xl">
            Внедрение ИИ во все бизнес-процессы — необходимость для выживания на
            рынке. Без ИИ компании теряют в гибкости, точности прогнозов и
            оптимизации затрат, что приводит к вытеснению с рынка.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </Section>
    </footer>
  );
};
