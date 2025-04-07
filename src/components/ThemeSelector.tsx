"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, Cog, Check, Plus } from "lucide-react";
import { toast } from "sonner"; // optional notification popup
import clsx from "clsx";

// List of themes and their swatches
const themeOptions = [
  { value: "light", label: "Light", icon: Sun, swatch: "#ffffff" },
  { value: "dark", label: "Dark", icon: Moon, swatch: "#0f172a" },
  {
    value: "system",
    label: "System",
    icon: Laptop,
    swatch: "linear-gradient(45deg, #fff, #000)",
  },
];

function ThemeSelector() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleCustomThemeClick = () => {
    toast.info("Custom themes are coming soon!");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Theme
          <span className="opacity-60 text-sm ml-2 capitalize">
            {resolvedTheme}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={clsx(
            "flex items-center justify-between gap-2 px-3 py-2 rounded-md border-l-4",
            resolvedTheme === "system"
              ? "border-primary bg-muted font-semibold text-primary"
              : "border-transparent hover:bg-muted"
          )}
        >
          <div className="flex items-center gap-2">
            <Laptop size={16} />
            <span className="text-sm">System</span>
          </div>
          <div
            className="w-4 h-4 rounded border"
            style={{ background: "linear-gradient(45deg, #fff, #000)" }}
          />
        </DropdownMenuItem>

        <hr className="my-1 border-t border-border" />

        {themeOptions
          .filter((t) => t.value !== "system")
          .map(({ value, label, icon: Icon, swatch }) => (
            <DropdownMenuItem
              key={value}
              onClick={() => setTheme(value)}
              className={clsx(
                "flex items-center justify-between gap-2 px-3 py-2 rounded-md border-l-3",
                resolvedTheme === value
                  ? "border-primary bg-muted font-semibold text-primary"
                  : "border-transparent hover:bg-muted"
              )}
            >
              <div className="flex items-center gap-2">
                <Icon size={16} />
                <span className="text-sm">{label}</span>
              </div>
              <div
                className="w-4 h-4 rounded border"
                style={{ background: swatch }}
              />
            </DropdownMenuItem>
          ))}

        <hr className="my-1 border-t border-border" />

        <DropdownMenuItem
          onClick={handleCustomThemeClick}
          className="flex items-center justify-between gap-2 px-3 py-2 mt-1 hover:bg-muted rounded-md"
        >
          <div className="flex items-center gap-2">
            <Cog size={16} />
            <span className="text-sm">Custom</span>
          </div>
          <Plus className="w-4 h-4 dark:text-white text-black" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeSelector;
