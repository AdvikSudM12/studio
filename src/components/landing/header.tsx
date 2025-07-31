import { BrainCircuit } from 'lucide-react';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <BrainCircuit className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold">EMD.EDUCATION</span>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <img
            src="https://static.tildacdn.com/tild6434-3963-4634-a563-343065656564/__NW__1_1.svg"
            alt="Conference Logo"
            className="h-10"
          />
        </div>
      </div>
    </header>
  );
};
