import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Scoped Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&display=swap');

        .desktop-nav {
          display: flex !important;
        }
        .hamburger-btn {
          display: none !important;
        }
        .mobile-drawer {
          display: none !important;
        }
        .mobile-overlay {
          display: none !important;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .mobile-drawer {
            display: block !important;
          }
          .mobile-overlay {
            display: block !important;
          }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
          backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "#0a0a0a",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(127,119,221,0.15)"
            : "1px solid transparent",
          transition: "border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 1.5rem",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo (clickable home link) ── */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#fff",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            <span style={{ color: "#7f77dd" }}>Portfolio</span>
          </a>

          {/* ── Desktop Links ── */}
          <ul
            style={{
              alignItems: "center",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    textDecoration: "none",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                    fontFamily: "'Syne', sans-serif",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#7f77dd")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "rgba(255,255,255,0.7)")
                  }
                >
                  {l}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "0.5rem 1.25rem",
                  backgroundColor: "#7f77dd",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  borderRadius: 6,
                  transition:
                    "background-color 0.2s ease, transform 0.15s ease",
                  fontFamily: "'Syne', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#5d55c9";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#7f77dd";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* ── Hamburger Button ── */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="hamburger-btn"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 44,
              height: 44,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              gap: 0,
              position: "relative",
            }}
          >
            {/* Top bar */}
            <span
              style={{
                display: "block",
                position: "absolute",
                width: 24,
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                transform: open
                  ? "translateY(0) rotate(45deg)"
                  : "translateY(-7px) rotate(0deg)",
                transition:
                  "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                transformOrigin: "center",
              }}
            />
            {/* Middle bar */}
            <span
              style={{
                display: "block",
                position: "absolute",
                width: 24,
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                opacity: open ? 0 : 1,
                transform: open ? "scaleX(0)" : "scaleX(1)",
                transition:
                  "opacity 0.2s ease, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                transformOrigin: "center",
              }}
            />
            {/* Bottom bar */}
            <span
              style={{
                display: "block",
                position: "absolute",
                width: 24,
                height: 2,
                backgroundColor: "#fff",
                borderRadius: 2,
                transform: open
                  ? "translateY(0) rotate(-45deg)"
                  : "translateY(7px) rotate(0deg)",
                transition:
                  "transform 0.35s cubic-bezier(0.23, 1, 0.32, 1)",
                transformOrigin: "center",
              }}
            />
          </button>
        </div>

        {/* ── Mobile Drawer ── */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? 400 : 0,
            transition: "max-height 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
            borderTop: open
              ? "1px solid rgba(127,119,221,0.15)"
              : "1px solid transparent",
          }}
          className="mobile-drawer"
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "1.5rem 1.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {links.map((l, i) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0.5rem",
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    fontFamily: "'Syne', sans-serif",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "color 0.2s ease, padding-left 0.2s ease",
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#7f77dd";
                    e.target.style.paddingLeft = "1rem";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.75)";
                    e.target.style.paddingLeft = "0.5rem";
                  }}
                >
                  {l}
                </a>
              </li>
            ))}
            <li style={{ marginTop: "1rem" }}>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#7f77dd",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  borderRadius: 6,
                  fontFamily: "'Syne', sans-serif",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#5d55c9")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#7f77dd")
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(2px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
        className="mobile-overlay"
      />
    </>
  );
};

export default Navbar;