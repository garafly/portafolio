"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { themeTokens } from "@/lib/theme-config";
import type { ThemeMode } from "@/types";
import type { WorkItem, WorkItemMedia } from "@/types/content-config";

type ProjectDetailViewProps = {
  project: WorkItem;
  themeMode: ThemeMode;
  onBack: () => void;
};

function GalleryMedia({ media }: { media: WorkItemMedia }) {
  if (media.type === "video") {
    return (
      <div className="overflow-hidden rounded-3xl border border-white/40 bg-black/10">
        <video
          controls
          playsInline
          poster={media.poster}
          className="h-full w-full object-cover"
        >
          <source src={media.src} />
        </video>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/40">
      <Image
        src={media.src}
        alt={media.alt}
        width={900}
        height={700}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default function ProjectDetailView({
  project,
  themeMode,
  onBack,
}: ProjectDetailViewProps) {
  const theme = themeTokens[themeMode];

  return (
    <div className="grid gap-8 md:ml-5 lg:ml-20 xl:grid-cols-[1fr_420px] ">
      <div>
        <button
          type="button"
          onClick={onBack}
          className={cn(
            "mb-6 rounded-xl border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5",
            theme.modalSecondaryButtonClass
          )}
        >
          ← Back to projects
        </button>

        <h2 className={cn("text-4xl font-bold md:text-6xl", theme.titleClass)}>
          {project.title}
        </h2>

        <div className="mt-6 space-y-6 max-w-4xl">
          <p
            className={cn(
              "text-base leading-relaxed md:text-[1.35rem] md:leading-[1.8]",
              theme.modalBodyTextClass
            )}
          >
            {project.summary}
          </p>

          <p
            className={cn(
              "text-base leading-relaxed md:text-[1.35rem] md:leading-[1.8]",
              theme.modalBodyTextClass
            )}
          >
            {project.involvement}
          </p>
        </div>

        {project.tags?.length ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className={cn(
                  "rounded-full px-4 py-2 text-sm leading-tight",
                  theme.modalTagClass
                )}
              >
                #{tag.label}
              </span>
            ))}
          </div>
        ) : null}

        {project.year ? (
          <p className={cn("mt-6 text-lg", theme.modalMetaTextClass)}>
            Year: {project.year}
          </p>
        ) : null}

        {project.gallery?.length ? (
          <div className={cn("mt-8 p-4 rounded-xl", theme.galleryBgClass)}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((media) => (
                <GalleryMedia key={media.id} media={media} />
              ))}
            </div>
          </div>
        ) : null}

        {project.liveUrl ? (
          <div className="mt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "inline-flex rounded-xl px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5",
                theme.modalPrimaryButtonClass
              )}
            >
              Visit project
            </a>
          </div>
        ) : null}
      </div>

      <div>
        <div className="overflow-hidden rounded-4xl border border-white/40 shadow-2xl">
          <Image
            src={project.mainImage.src}
            alt={project.mainImage.alt}
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}