import { BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold">AI Transformation Navigator</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button>Начать трансформацию</Button>
        </div>
      </div>
    </header>
  );
};
