import { ProcessAnalyzer } from './process-analyzer';
import { SpecGenerator } from './spec-generator';
import { Section } from './section';

export const AiTools = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Попробуйте наши AI-инструменты
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Проверьте потенциал AI на своих задачах прямо сейчас. Получите
          рекомендации и сгенерируйте техническую спецификацию за несколько
          минут.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <ProcessAnalyzer />
        <SpecGenerator />
      </div>
    </Section>
  );
};
