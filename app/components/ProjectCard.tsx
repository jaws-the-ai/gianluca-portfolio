"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Stat = { value: string; label: string };
type Img = { src: string; alt: string };
type Btn = { label: string; url: string };

export type AiProject = {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  stats: Stat[];
  description: string;
  role: string[];
  primaryButton: Btn;
  secondaryButton?: Btn | null;
  cover: Img;
  screenshots?: Img[];
};

export default function ProjectCard({ project }: { project: AiProject }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const screenshots = project.screenshots ?? [];
  // Cover is always index 0 in the lightbox; screenshots follow
  const lightboxImages = [project.cover, ...screenshots];

  const close = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxIndex, close]);

  return (
    <>
      <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col">
        {/* Cover image — click to open lightbox */}
        <button
          onClick={() => setLightboxIndex(0)}
          className="relative w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group"
          style={{ aspectRatio: "16 / 10" }}
          aria-label={`View full image: ${project.cover.alt}`}
        >
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-opacity group-hover:opacity-90"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-black/50 rounded-full p-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M3 3h5M3 3v5M17 3h-5M17 3v5M3 17h5M3 17v-5M17 17h-5M17 17v-5" />
              </svg>
            </div>
          </div>
        </button>

        <div className="p-6 flex flex-col gap-5 flex-1">
          {/* Title + subtitle */}
          <div>
            <h3 className="text-lg font-semibold text-stone-900 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-stone-500 mt-1">{project.subtitle}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {project.tags.map((t) => (
              <span
                key={t}
                className="bg-stone-100 text-stone-500 text-xs px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="flex gap-5 flex-wrap">
            {project.stats.map((s) => (
              <div key={s.label} className="border-l-2 border-amber-600 pl-3">
                <p className="text-lg font-semibold text-stone-900 leading-none">
                  {s.value}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-stone-500 leading-relaxed">
            {project.description}
          </p>

          {/* My role */}
          <div>
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">
              My role
            </p>
            <ul className="flex flex-col gap-2">
              {project.role.map((r, i) => (
                <li key={i} className="text-sm text-stone-500 flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot strip — indices offset by 1 since cover is lightboxImages[0] */}
          {screenshots.length > 0 && (
            <div className="flex gap-2">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i + 1)}
                  className="relative flex-1 rounded-lg overflow-hidden border border-stone-100 hover:border-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  style={{ aspectRatio: "16 / 10" }}
                  aria-label={`View screenshot: ${s.alt}`}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="15vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-auto pt-2">
            <a
              href={project.primaryButton.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-colors"
            >
              {project.primaryButton.label}
            </a>
            {project.secondaryButton && (
              <a
                href={project.secondaryButton.url}
                {...(project.secondaryButton.url.startsWith("#")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="border border-stone-300 text-stone-700 px-5 py-2 rounded-full text-sm font-medium hover:border-stone-500 transition-colors"
              >
                {project.secondaryButton.label}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox — full viewport */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightboxImages[lightboxIndex].alt}`}
        >
          {/* Top bar */}
          <div className="flex justify-end p-4 shrink-0">
            <button
              onClick={close}
              className="text-white/60 hover:text-white flex items-center gap-2 text-sm transition-colors"
              aria-label="Close lightbox"
            >
              Close
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 2l10 10M2 12L12 2" />
              </svg>
            </button>
          </div>

          {/* Image — fills remaining height, click backdrop to close */}
          <div className="relative flex-1 cursor-zoom-out" onClick={close}>
            <Image
              src={lightboxImages[lightboxIndex].src}
              alt={lightboxImages[lightboxIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Dots */}
          {lightboxImages.length > 1 && (
            <div className="flex gap-3 py-5 justify-center shrink-0">
              {lightboxImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === lightboxIndex ? "bg-white" : "bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
