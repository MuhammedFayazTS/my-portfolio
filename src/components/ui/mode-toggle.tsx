"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useResponsive } from "@/hooks/useResponsive";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [message, setMessage] = React.useState<string | null>(null);
  const [visible, setVisible] = React.useState(false);

  const { isMobile } = useResponsive();

  const nextTheme = theme === "dark" ? "light" : "dark";
  const tooltipText =
    theme === "dark" ? "🧛‍♂️ Vampire mode off" : "🧛‍♂️ Vampire mode on";

  const handleClick = () => {
    setTheme(nextTheme);

    const msg =
      nextTheme === "dark" ? "🧛 I am alive." : "☀️ Back to daylight.";
    setMessage(msg);
    setVisible(true);

    setTimeout(() => setVisible(false), isMobile ? 1000 : 2500);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClick}
              className="transition-all hover:scale-110 relative"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>

          <TooltipContent
            side="bottom"
            className="z-[1001] flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium
                       bg-background text-foreground border border-border shadow-sm
                       dark:bg-neutral-900 dark:text-neutral-100 dark:border-neutral-700"
          >
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {visible && (
        <>
          {
            !isMobile ? (<div
              className="fixed bottom-4 right-4 z-[1001] flex 
                 items-center justify-center rounded-md 
                 bg-white/80 dark:bg-neutral-800/80
                 text-sm text-neutral-800 dark:text-neutral-200
                 px-3 py-1 shadow-sm backdrop-blur-sm transition-opacity
                 animate-fade-in-out select-none"
            >
              {message}
            </div>)
              :
              (<div
                className="fixed inset-0 z-[1001] flex items-center justify-center pb-16
                 bg-black/30 dark:bg-black/40 backdrop-blur-[2px]"
              >
                <div
                  className="rounded-md bg-white/85 dark:bg-neutral-800/85
                   text-sm text-neutral-800 dark:text-neutral-200
                   px-4 py-2 shadow-sm select-none
                   "
                >
                  {message}
                </div>
              </div>)
          }
        </>
      )}

    </>
  );
}
