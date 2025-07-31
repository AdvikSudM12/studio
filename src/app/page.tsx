import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { CompetitionShift } from '@/components/landing/competition-shift';
import { WhyAi } from '@/components/landing/why-ai';
import { SuccessStories } from '@/components/landing/success-stories';
import { OurSolutions } from '@/components/landing/our-solutions';
import { AnalysisWorkflow } from '@/components/landing/analysis-workflow';
import { OurOfferings } from '@/components/landing/our-offerings';
import { Footer } from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Separator } from '@/components/ui/separator';
import { AiTools } from '@/components/landing/ai-tools';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <CompetitionShift />
        <WhyAi />
        <SuccessStories />
        <OurSolutions />
        <Section>
          <Separator />
        </Section>
        <AnalysisWorkflow />
        <OurOfferings />
        <AiTools/>
        <Section>
          <Separator />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
