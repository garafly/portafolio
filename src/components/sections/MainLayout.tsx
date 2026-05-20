"use client";

import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
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
import ShowcaseAnnotations from "@/components/showcase/ShowcaseAnnotations";
import ProjectDetailView from "@/components/sections/right-panel/ProjectDetailView";
import MobileVerticalMenu from "@/components/layout/MobileVerticalMenu";

import { portfolioContent } from "@/lib/content-config";
import { themeTokens } from "@/lib/theme-config";
import { cn } from "@/lib/utils";

import ChickRunnerLoader from "@/components/loading/ChickRunnerLoader";

import type { ThemeMode, ViewMode, Locale } from "@/types";
import { aboutModalContent } from "@/lib/about-modal-content";

type MainLayoutProps = {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;

  modelMode: ViewMode;
  setModelMode: (mode: ViewMode) => void;

  themeMode: ThemeMode;
  setThemeMode: (theme: ThemeMode) => void;

  locale: Locale;
  setLocale: (locale: Locale) => void;

  selectedProjectId: string | null;
  setSelectedProjectId: (id: string | null) => void;
};

const contentColumnReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(2px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.2,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MainLayout({
  mode,
  setMode,
  modelMode,
  setModelMode,
  themeMode,
  setThemeMode,
  locale,
  setLocale,
  selectedProjectId,
  setSelectedProjectId,
}: MainLayoutProps) {
const { active, progress } = useProgress();

const [isShowcaseReady, setIsShowcaseReady] = useState(false);
const [minimumLoaderPassed, setMinimumLoaderPassed] = useState(false);

useEffect(() => {
  const timer = window.setTimeout(() => {
    setMinimumLoaderPassed(true);
  }, 1800);

  return () => window.clearTimeout(timer);
}, []);

useEffect(() => {
  const timer = window.setTimeout(
    () => {
      setIsShowcaseReady(!active && minimumLoaderPassed);
    },
    active ? 0 : 350
  );

  return () => window.clearTimeout(timer);
}, [active, minimumLoaderPassed]);




  const theme = themeTokens[themeMode];
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const localizedAboutContent = aboutModalContent[locale];

  const logoIconSrc =
    themeMode === "dark" ? "/logo_icon_dark.png" : "/logo_icon.png";

  const logoSrc = themeMode === "dark" ? "/logo_dark.png" : "/logo.png";

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
              className="flex h-auto w-20 shrink-0 items-center md:justify-center"
              aria-label="Go to intro"
            >
              <Image
                src={logoIconSrc}
                alt="Garafly icon logo"
                width={48}
                height={48}
                className="h-18 w-auto object-contain"
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
          <div className="grid flex-1 grid-cols-1 justify-end gap-0 xl:grid-cols-[80px_minmax(0,1fr)]">
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

            <section className="min-w-0 pt-6">
              <ProjectDetailView
                project={selectedProject}
                themeMode={themeMode}
                onBack={() => setSelectedProjectId(null)}
              />
            </section>
          </div>
        ) : (
          /* NORMAL MODE */
          <div
            className="
              grid flex-1 md:gap-8 lg:gap-16 2xl:gap-20
              md:grid-cols-[70px_minmax(0,1fr)]
              lg:grid-cols-[70px_minmax(0,1fr)]
            "
          >
            {/* Vertical Menu */}
            <aside className="hidden md:flex">
              <VerticalMenu
                themeMode={themeMode}
                setMode={(nextMode) => {
                  setMode(nextMode);
                  setSelectedProjectId(null);
                }}
                onOpenAboutModal={() => setIsAboutModalOpen(true)}
              />
            </aside>

            {/* Main responsive content area */}
            <div
              className="
                grid min-w-0 flex-1 grid-cols-1 gap-8

                lg:mx-auto
                lg:w-full
                lg:max-w-[900px]
                lg:grid-cols-[minmax(300px,400px)_minmax(400px,560px)]
                lg:justify-center
                lg:gap-6

                xl:max-w-[1120px]
                xl:grid-cols-[minmax(480px,520px)_minmax(560px,700px)]
                xl:gap-10

                2xl:max-w-none
                2xl:grid-cols-[minmax(260px,0.75fr)_minmax(480px,560px)_minmax(320px,0.85fr)]
                2xl:justify-stretch
                2xl:gap-0
              "
            >
              {/* Left */}
              <section
                className="
                  min-w-0 px-4 pt-4
                  md:px-0 md:pt-6
                  lg:p-0
                "
              >
                <motion.div
                  variants={contentColumnReveal}
                  initial="hidden"
                  animate={isShowcaseReady ? "visible" : "hidden"}
                >
                  <ModeContent
                    content={currentModeContent}
                    themeMode={themeMode}
                  />
                </motion.div>
              </section>

              {/* Center */}
              <section
                className="
                  relative min-w-0 overflow-visible px-4 pt-8
                  md:px-0 md:pt-4
                  lg:p-0
                  2xl:p-0
                "
              >
                <div
                  className="
                    relative mx-auto w-full overflow-visible
                    max-w-[430px]
                    sm:max-w-[520px]

                    lg:max-w-[560px]
                    xl:max-w-[700px]

                    2xl:max-w-none
                  "
                >
                  <ShowcaseCanvas
                    mode={modelMode}
                    setMode={setModelMode}
                    themeMode={themeMode}
                    isShowcaseReady={isShowcaseReady}
                  />

                  <ShowcaseAnnotations
                    mode={mode}
                    modelMode={modelMode}
                    themeMode={themeMode}
                    isShowcaseReady={isShowcaseReady}
                  />
                </div>
              </section>

              {/* Right */}
              <section
                className="
                  min-w-0 px-4 pt-8

                  lg:col-span-2
                  lg:px-0
                  lg:pt-10

                  2xl:col-span-1
                  2xl:p-0
                "
              >
                <motion.div
                  variants={contentColumnReveal}
                  initial="hidden"
                  animate={isShowcaseReady ? "visible" : "hidden"}
                >
                  <RightPanel
                    content={currentModeContent}
                    themeMode={themeMode}
                    setSelectedProjectId={setSelectedProjectId}
                  />
                </motion.div>
              </section>
            </div>
          </div>
        )}

        {/* Mobile Vertical Menu / Social Dock */}
        <div className="mt-4 md:hidden">
          <MobileVerticalMenu
            themeMode={themeMode}
            setMode={(nextMode) => {
              setMode(nextMode);
              setSelectedProjectId(null);
            }}
            onOpenAboutModal={() => setIsAboutModalOpen(true)}
          />
        </div>

        {/* FOOTER */}
        <footer className="mt-20 flex justify-center md:mt-10">
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

      <ChickRunnerLoader
        isVisible={!isShowcaseReady}
        progress={progress}
        themeMode={themeMode}
      />

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