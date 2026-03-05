"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WizardNavProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  stepLabels?: string[];
}

export function WizardNav({ currentStep, totalSteps, onNext, onPrev, stepLabels }: WizardNavProps) {
  return (
    <>
      {/* Fixed top-left back button */}
      <Link
        href="/"
        className="fixed left-4 top-4 z-50 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-4 py-2 text-xs font-medium text-zinc-400 backdrop-blur-md transition-all hover:border-[#DB253D]/50 hover:text-white"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Voltar ao Início</span>
      </Link>

      {/* Bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onPrev}
            disabled={currentStep === 0}
            className="text-white hover:text-[#DB253D] disabled:opacity-30"
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Anterior
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === currentStep ? "w-8 bg-[#DB253D]" : "w-2 bg-zinc-700"
                )}
              />
            ))}
          </div>

          {stepLabels && (
            <span className="text-xs text-zinc-500 hidden md:block absolute left-1/2 -translate-x-1/2 top-1">
              {stepLabels[currentStep]}
            </span>
          )}

          <Button
            variant="ghost"
            onClick={onNext}
            disabled={currentStep === totalSteps - 1}
            className="text-white hover:text-[#DB253D] disabled:opacity-30"
          >
            Próximo <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
