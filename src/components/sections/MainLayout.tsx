"use client";
import { useState } from "react";
import AboutModal from "@/components/layout/AboutModal";
import VerticalMenu from "@/components/layout/VerticalMenu";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import ThemeToggle from "@/components/layout/ThemeToggle";
import ModeContent from "@/components/modes/ModeContent";
import RightPanel from "@/components/sections/RightPanel";
import ShowcaseCanvas from "@/components/showcase/ShowcaseCanvas";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";
import type { ThemeMode, ViewMode } from "@/types";



type MainLayoutProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
};

export default function MainLayout({
  mode,
  setMode,
  themeMode,
  setThemeMode,
}: MainLayoutProps) {
  const theme = themeTokens[themeMode];

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const logoIconSrc =
  themeMode === "dark" ? "/logo_icon_dark.png" : "/logo_icon.png";

  const logoSrc =
  themeMode === "dark" ? "/logo_dark.png" : "/logo.png";


  return (
    <main className={cn("min-h-screen px-6 py-6 lg:px-10", theme.pageBackgroundClass)}>
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-425 flex-col">
        <header className="mb-6 flex items-start justify-between gap-6">
<button
  type="button"
  onClick={() => setMode("intro")}
  className="flex h-24 w-24 shrink-0 items-center justify-end"
  aria-label="Go to intro"
>
  <Image
    src={logoIconSrc}
    alt="Garafly icon logo"
    width={42}
    height={60}
    className="h-auto w-auto object-contain px-2"
    priority
  />
</button>

          <div className="flex-1 pt-3">
            <Navbar mode={mode} setMode={setMode} themeMode={themeMode} />
          </div>

          <div className="shrink-0 pt-2">
            <ThemeToggle themeMode={themeMode} setThemeMode={setThemeMode} />
          </div>
        </header>

        <div className="grid flex-1 grid-cols-1 gap-10 xl:grid-cols-[120px_minmax(340px,1fr)_minmax(420px,560px)_minmax(360px,1fr)]">
            <aside className="hidden xl:flex">
            <VerticalMenu
                themeMode={themeMode}
                setMode={setMode}
                onOpenAboutModal={() => setIsAboutModalOpen(true)}
            />
            </aside>

            <section className="flex items-start pt-4">
                <ModeContent mode={mode} themeMode={themeMode} />
            </section>

            <section className="flex flex-col items-center justify-start pt-8">
                <ShowcaseCanvas mode={mode} themeMode={themeMode} />
            </section>

            <section className="flex items-start justify-center pt-8">
                <RightPanel mode={mode} themeMode={themeMode} />
            </section>
        </div>

        <footer className="mt-10 flex justify-center">
          <div className="flex items-center">
            <Image
              src={logoSrc}
              alt="Garafly logo"
              width={64}
              height={8}
              className="h-auto w-auto object-contain"
              priority
            />

            <div className={cn("text-sm h-full flex items-center pt-2 pl-1", theme.footerTextClass)}>
              ©2026 All rights reserved
            </div>
          </div>
        </footer>
      </div>
        <AboutModal
            isOpen={isAboutModalOpen}
            onClose={() => setIsAboutModalOpen(false)}
            themeMode={themeMode}
        />
    </main>
  );
}