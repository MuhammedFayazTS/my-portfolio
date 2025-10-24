"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

const themes = [
  { name: "light", icon: <Sun />, label: "Light theme" },
  { name: "dark", icon: <Moon />, label: "Dark theme" },
  { name: "system", icon: <Monitor />, label: "System theme" },
];

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [index, setIndex] = React.useState(0);

  const handleClick = () => {
    setTheme(themes[index].name);
    setIndex((prev) => (prev + 1) % themes.length); // Move to the next button in a loop
  };

  return (
    <Button variant="ghost" onClick={handleClick}>
      {themes[index].icon}
      <span className="sr-only">{themes[index].label}</span>
    </Button>
  );
}
