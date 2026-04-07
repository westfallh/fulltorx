export function SidebarHeader() {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 w-[155px]">
        <div className="relative h-full">
          <div
            style={{
              position: "absolute",
              left: "74px",
              bottom: "28px",
              transform: "rotate(-90deg)",
              transformOrigin: "left bottom",
              display: "grid",
              gridTemplateColumns: "auto auto auto",
              gap: "192px",
              alignItems: "end",
              whiteSpace: "nowrap",
            }}
          >
            <div style={{ display: "grid", gap: "4px" }}>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "var(--font-korataki)",
                  fontSize: "24px",
                  lineHeight: 0.85,
                  background: "rgba(255,255,255,0.94)",
                  padding: "3px 6px",
                }}
              >
                FULL TORX
              </h1>
              <h1
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1,
                  background: "rgba(255,255,255,0.94)",
                  padding: "3px 6px",
                }}
              >
                INTERACTION DESIGN AND PRODUCT SERVICES
              </h1>
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1,
                background: "rgba(255,255,255,0.94)",
                padding: "3px 6px",
              }}
            >
              2026 WORK
            </h1>
            <h1
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: 1,
                background: "rgba(255,255,255,0.94)",
                padding: "3px 6px",
              }}
            >
              TO:{" "}
              <a href="https://www.hwstfall.com/" target="_blank" rel="noopener noreferrer">
                WWW.HWSTFALL.COM
              </a>
            </h1>
          </div>
        </div>
      </aside>

    </>
  );
}
