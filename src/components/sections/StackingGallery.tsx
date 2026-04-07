"use client";

import Image from "next/image";
import { useState } from "react";

import { galleryCards } from "@/data/siteContent";

function ProjectDetailAside({
  openProject,
  className,
}: {
  openProject: NonNullable<ReturnType<typeof galleryCards.find>>;
  className: string;
}) {
  if (!openProject.project) return null;
  return (
    <aside
      onClick={(event) => event.stopPropagation()}
      className={className}
    >
      <p style={{ margin: 0, textAlign: "center", fontSize: "13px", lineHeight: 1.1 }}>
        {openProject.project.title}
      </p>
      {openProject.project.linkUrl ? (
        <p style={{ margin: "4px 0 0 0", textAlign: "center", fontSize: "12px", lineHeight: 1.1 }}>
          <a
            href={openProject.project.linkUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#2458d3", textDecoration: "underline" }}
          >
            {openProject.project.linkLabel ?? openProject.project.linkUrl}
          </a>
        </p>
      ) : null}
      <p style={{ margin: "12px 0 0 0", fontSize: "12px", lineHeight: 1.25 }}>
        {openProject.project.description}
      </p>
      <p style={{ margin: "18px 0 0 0", textAlign: "center", fontSize: "12px", lineHeight: 1.2 }}>
        CREDITS
      </p>
      <div style={{ marginTop: "6px", display: "grid", gap: "2px" }}>
        {openProject.project.credits.map((line) => (
          <p key={line} style={{ margin: 0, fontSize: "12px", lineHeight: 1.2 }}>
            {line}
          </p>
        ))}
      </div>
    </aside>
  );
}

export function StackingGallery() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const openProject = galleryCards.find((card) => card.id === openProjectId && card.project);

  const desktopAsideClass =
    "absolute right-[5%] bottom-[3%] z-10 w-[min(62vw,520px)] rounded-[24px] bg-white/95 px-6 py-5 text-[#111]";

  const mobileAsideClass =
    "w-full border-t border-neutral-200/80 bg-white p-5 pb-10 text-[#111]";

  return (
    <section>
      {galleryCards.map((card, index) => (
        <article
          key={card.id}
          style={{
            position: "sticky",
            top: 0,
            zIndex: index + 1,
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: card.spin3d ? "center" : "flex-start",
            paddingTop: card.spin3d ? "0" : "8px",
            marginTop: index === 0 ? "0" : "70vh",
          }}
        >
          {card.spin3d ? (
            <button
              type="button"
              onClick={() => {
                if (card.project) setOpenProjectId(card.id);
              }}
              style={{
                all: "unset",
                cursor: card.project ? "pointer" : "default",
                display: "block",
                width: "100%",
              }}
            >
              <div
                className="varsity-3d-stage flex w-full items-center justify-center"
                style={{ minHeight: "calc(100vh - 8px)" }}
              >
                <div className="varsity-3d-spin flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.src ?? ""}
                    alt={card.alt ?? ""}
                    className="h-[min(52vh,520px)] w-auto max-w-[min(92vw,900px)] md:h-[min(58vh,600px)]"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (card.project) setOpenProjectId(card.id);
              }}
              style={{
                all: "unset",
                cursor: card.project ? "pointer" : "default",
              }}
            >
              <Image
                src={card.src ?? ""}
                alt={card.alt ?? "Gallery image"}
                width={1100}
                height={760}
                sizes="100vw"
                quality={68}
                priority={index <= 2}
                style={{
                  width: "100vw",
                  maxWidth: "100vw",
                  maxHeight: "calc(100vh - 8px)",
                  height: "auto",
                  borderRadius: card.rounded ? "9999px" : undefined,
                  objectFit: "contain",
                }}
              />
            </button>
          )}
        </article>
      ))}
      <div style={{ height: "100vh" }} />

      {openProject && (
        <div
          onClick={() => setOpenProjectId(null)}
          className="fixed inset-0 z-[80] bg-black/[0.18] max-md:overflow-y-auto md:grid md:place-items-center md:overflow-hidden md:bg-black/[0.18]"
        >
          {/* Mobile: stacked image then copy */}
          <div className="flex min-h-full w-full flex-col bg-white md:hidden">
            {openProject.spin3d ? (
              <div className="flex w-full justify-center px-4 pt-6 pb-4">
                <div
                  style={{
                    background: "linear-gradient(160deg, #e8eefc 0%, #f4f6fb 50%, #dfe8fb 100%)",
                    borderRadius: "28px",
                    padding: "clamp(24px, 5vw, 48px) clamp(20px, 4vw, 48px)",
                    boxShadow: "0 24px 60px rgba(15, 40, 90, 0.12)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={openProject.src ?? ""}
                    alt={openProject.alt ?? "Varsity"}
                    style={{
                      display: "block",
                      width: "auto",
                      maxWidth: "min(88vw, 820px)",
                      maxHeight: "min(50vh, 520px)",
                      height: "auto",
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ) : (
              <Image
                src={openProject.src ?? ""}
                alt={openProject.alt ?? "Project image"}
                width={2105}
                height={1356}
                sizes="100vw"
                quality={68}
                priority
                className="h-auto w-full object-contain"
              />
            )}
            <ProjectDetailAside openProject={openProject} className={mobileAsideClass} />
          </div>

          {/* Desktop: unchanged centered treatment + floating card */}
          <div
            className="relative hidden h-screen w-screen md:grid md:place-items-center"
            style={{ width: "100vw", maxHeight: "100vh" }}
          >
            {openProject.spin3d ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  minHeight: "62vh",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 16px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(160deg, #e8eefc 0%, #f4f6fb 50%, #dfe8fb 100%)",
                    borderRadius: "28px",
                    padding: "clamp(32px, 6vw, 72px) clamp(28px, 5vw, 64px)",
                    boxShadow: "0 24px 60px rgba(15, 40, 90, 0.12)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={openProject.src ?? ""}
                    alt={openProject.alt ?? "Varsity"}
                    style={{
                      display: "block",
                      width: "auto",
                      maxWidth: "min(88vw, 820px)",
                      maxHeight: "min(72vh, 640px)",
                      height: "auto",
                      margin: "0 auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            ) : (
              <Image
                src={openProject.src ?? ""}
                alt={openProject.alt ?? "Project image"}
                width={2105}
                height={1356}
                sizes="100vw"
                quality={68}
                style={{
                  width: "100vw",
                  maxHeight: "100vh",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
            <ProjectDetailAside openProject={openProject} className={desktopAsideClass} />
          </div>
        </div>
      )}
    </section>
  );
}
