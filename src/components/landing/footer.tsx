import { Section } from './section';
import { BrainCircuit } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <Section className="py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold">EMD.EDUCATION</span>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground max-w-2xl">
             <p>
              <a href="https://cloud.emd.one/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                EMD Cloud Platform
              </a>
             </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Все права защищены.
          </p>
        </div>
      </Section>
    </footer>
  );
};
