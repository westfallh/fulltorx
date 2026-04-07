"use client";

import Image from "next/image";
import { useState } from "react";

import { galleryCards } from "@/data/siteContent";

export function StackingGallery() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const openProject = galleryCards.find((card) => card.id === openProjectId && card.project);

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
                sizes="96vw"
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
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 80,
            background: "rgba(0,0,0,0.18)",
            display: "grid",
            placeItems: "center",
            padding: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100vw",
              maxHeight: "100vh",
              display: "grid",
              placeItems: "center",
            }}
          >
            {openProject.spin3d ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  minHeight: "100vh",
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
                style={{
                  width: "100vw",
                  maxHeight: "100vh",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
            <aside
              onClick={(event) => event.stopPropagation()}
              style={{
                position: "absolute",
                right: "5%",
                bottom: "3%",
                width: "min(62vw, 520px)",
                borderRadius: "24px",
                background: "rgba(255,255,255,0.95)",
                padding: "22px 26px 24px 26px",
                color: "#111",
              }}
            >
              <p style={{ margin: 0, textAlign: "center", fontSize: "13px", lineHeight: 1.1 }}>
                {openProject.project?.title}
              </p>
              {openProject.project?.linkUrl ? (
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
                {openProject.project?.description}
              </p>
              <p style={{ margin: "18px 0 0 0", textAlign: "center", fontSize: "12px", lineHeight: 1.2 }}>
                CREDITS
              </p>
              <div style={{ marginTop: "6px", display: "grid", gap: "2px" }}>
                {openProject.project?.credits.map((line) => (
                  <p key={line} style={{ margin: 0, fontSize: "12px", lineHeight: 1.2 }}>
                    {line}
                  </p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}
