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
            alignItems: "flex-start",
            paddingTop: "8px",
            marginTop: index === 0 ? "0" : "70vh",
          }}
        >
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
              <p style={{ margin: "4px 0 0 0", textAlign: "center", fontSize: "12px", lineHeight: 1.1 }}>
                <a
                  href="https://meantimela.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#2458d3", textDecoration: "underline" }}
                >
                  MEANTIMELA.COM
                </a>
              </p>
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
