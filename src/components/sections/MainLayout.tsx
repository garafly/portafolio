"use client";

import { useState } from "react";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import ThemeToggle from "@/components/layout/ThemeToggle";
import VerticalMenu from "@/components/layout/VerticalMenu";
import AboutModal from "@/components/layout/AboutModal";
import LanguageToggle from "@/components/layout/LanguageToggle";

import ModeContent from "@/components/modes/ModeContent";
import RightPanel from "@/components/sections/RightPanel";
import ShowcaseCanvas from "@/components/showcase/ShowcaseCanvas";
import ProjectDetailView from "@/components/sections/right-panel/ProjectDetailView";

import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

import type { ThemeMode, ViewMode, Locale } from "@/types";
import { aboutModalContent } from "@/lib/about-modal-content";

type MainLayoutProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
};

export default function MainLayout({
  mode,
  setMode,
  themeMode,
  setThemeMode,
  locale,
  setLocale,
  selectedProjectId,
  setSelectedProjectId,
}: MainLayoutProps) {
  const theme = themeTokens[themeMode];
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const localizedAboutContent = aboutModalContent[locale];

  const logoIconSrc =
    themeMode === "dark" ? "/logo_icon_dark.png" : "/logo_icon.png";

  const logoSrc =
    themeMode === "dark" ? "/logo_dark.png" : "/logo.png";

  const localizedContent = portfolioContent[locale];
const currentModeContent = localizedContent.modes[mode];

  const selectedProject =
    selectedProjectId && currentModeContent.workItems
      ? currentModeContent.workItems.find(
          (item) => item.id === selectedProjectId
        ) ?? null
      : null;

  return (
    <main
      className={cn(
        "min-h-screen overflow-x-hidden px-4 py-4 sm:px-6 sm:py-6 lg:px-10",
        theme.pageBackgroundClass
      )}
    >
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-425 flex-col">
        {/* HEADER */}
        <header className="mb-6">
          <div className="flex items-start justify-between gap-6">
            {/* Logo */}
            <button
              type="button"
              onClick={() => {
                setMode("intro");
                setSelectedProjectId(null);
              }}
              className="flex h-24 w-24 shrink-0 items-center  md:pr-2 md:justify-end"
              aria-label="Go to intro"
            >
              <Image
                src={logoIconSrc}
                alt="Garafly icon logo"
                width={48}
                height={48}
                className="w-auto h-20 object-contain "
                priority
              />
            </button>

            {/* Desktop Navbar */}
            <div className="hidden flex-1 pt-3 md:block">
              <Navbar
                mode={mode}
                setMode={setMode}
                themeMode={themeMode}
                navItems={localizedContent.navItems}
              />
            </div>

            {/* Toggle */}
            <div className="shrink-0 pt-6">
              <ThemeToggle
                themeMode={themeMode}
                setThemeMode={setThemeMode}
              />
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className="mt-3 md:hidden">
            <MobileNavbar
              mode={mode}
              setMode={setMode}
              themeMode={themeMode}
              navItems={localizedContent.navItems}
            />
          </div>
        </header>

        {/* PROJECT DETAIL MODE */}
        {selectedProject ? (
          <div className="grid flex-1 grid-cols-1 gap-10 xl:grid-cols-[120px_minmax(0,1fr)]">
            <aside className="hidden xl:flex">
              <VerticalMenu
                themeMode={themeMode}
                setMode={(nextMode) => {
                  setMode(nextMode);
                  setSelectedProjectId(null);
                }}
                onOpenAboutModal={() => setIsAboutModalOpen(true)}
              />
            </aside>

            <section className="pt-6">
              <ProjectDetailView
                project={selectedProject}
                themeMode={themeMode}
                onBack={() => setSelectedProjectId(null)}
              />
            </section>
          </div>
        ) : (
          /* NORMAL MODE */
          <div className="grid flex-1 grid-cols-1 gap-10 md:w-[90%] xl:w-full xl:grid-cols-[120px_minmax(340px,1fr)_minmax(420px,560px)_minmax(360px,1fr)]">
            {/* Vertical Menu */}
            <aside className="hidden xl:flex">
              <VerticalMenu
                themeMode={themeMode}
                setMode={(nextMode) => {
                  setMode(nextMode);
                  setSelectedProjectId(null);
                }}
                onOpenAboutModal={() => setIsAboutModalOpen(true)}
              />
            </aside>

            {/* Left */}
            <section className="min-w-0 px-4 pt-4 md:px-10 xl:px-0">
              <ModeContent
                content={currentModeContent}
                themeMode={themeMode}
              />
            </section>

            {/* Center */}
            <section className="min-w-0 px-4 pt-8 md:p-10 xl:p-0">
              <ShowcaseCanvas mode={mode} themeMode={themeMode} />
            </section>

            {/* Right */}
            <section className="min-w-0 p-8 px-4 md:p-10 xl:p-0">
              <RightPanel
                content={currentModeContent}
                themeMode={themeMode}
                setSelectedProjectId={setSelectedProjectId}
              />
            </section>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-10 flex justify-center">
          <div className="flex items-center gap-1">
            <Image
              src={logoSrc}
              alt="Garafly logo"
              width={64}
              height={8}
              className="h-12 w-auto object-contain"
              priority
            />

            <div className={cn("pt-3 text-sm", theme.footerTextClass)}>
              ©2026 All rights reserved
            </div>
          </div>
        </footer>
      </div>

      <LanguageToggle
        locale={locale}
        setLocale={setLocale}
        themeMode={themeMode}
      />

      {/* ABOUT MODAL */}
      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        themeMode={themeMode}
        content={localizedAboutContent}
      />
    </main>
  );
}