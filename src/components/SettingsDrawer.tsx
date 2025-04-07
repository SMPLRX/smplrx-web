"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Settings, X } from "lucide-react";
import { useState } from "react";
import ThemeSelector from "./ThemeSelector";

function SettingsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      {/* Floating trigger button */}
      <DrawerTrigger asChild>
        <button
          aria-label="Open settings"
          className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-background/80 backdrop-blur border border-border shadow-md flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105 group"
        >
          <Settings className="w-5 h-5 text-foreground transition-transform duration-500 ease-in-out group-hover:rotate-180" />
        </button>
      </DrawerTrigger>

      <DrawerContent className="max-w-sm ml-auto px-4">
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerHeader>

        {/* Close button */}
        <DrawerClose asChild>
          <button
            aria-label="Close"
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </DrawerClose>

        {/* Drawer body */}
        <div className="h-full flex flex-col w-full pt-4 pb-6 space-y-4">
          {/* Additional settings go here */}
          <div className="flex-1" />
          <ThemeSelector />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default SettingsDrawer;
