import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import logo from "../Image/logo5.jpg"; // change path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 900 : false
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => setIsMobile(window.innerWidth < 900);

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  const headerHeight = scrolled ? 72 : 88; // used for layout spacing in pages

  const header = {
    width: "100%",
    height: `${headerHeight}px`,
    padding: "0 20px",
    background: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    boxShadow: scrolled ? "0 6px 20px rgba(0,0,0,0.12)" : "none",
    transition: "all 200ms ease",
    boxSizing: "border-box",
  };

  const leftBox = { display: "flex", alignItems: "center", gap: 14 };
  const logoStyle = {
    height: 58,
    width: 58,
    borderRadius: "50%",
    border: "3px solid #1a73e8",
    objectFit: "cover",
    cursor: "pointer",
  };

  const nameBox = { display: "flex", flexDirection: "column", lineHeight: 1.05 };
  const instituteName = {
    fontSize: 18,
    fontWeight: 800,
    color: "#0a2a63",
    textTransform: "uppercase",
  };
  const tagline = {
    fontSize: 12,
    color: "#1a73e8",
    fontWeight: 600,
    marginTop: 2,
  };

  const navDesktop = { display: isMobile ? "none" : "flex", gap: 26, alignItems: "center" };
  const navLink = {
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 700,
    color: "#1a1a1a",
    padding: "6px 8px",
    borderRadius: 8,
  };

  const rightIcons = { display: "flex", alignItems: "center", gap: 18 };
  const phoneIcon = { fontSize: 20, color: "#0a2a63", cursor: "pointer" };
  const menuBtn = {
    display: isMobile ? "block" : "none",
    fontSize: 26,
    background: "none",
    border: "none",
    color: "#0a2a63",
    cursor: "pointer",
  };

  const sideMenu = {
    position: "fixed",
    top: 0,
    right: menuOpen ? 0 : "-100%",
    width: "78%",
    maxWidth: 360,
    height: "100vh",
    background: "#ffffff",
    paddingTop: headerHeight + 20,
    paddingLeft: 22,
    paddingRight: 22,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    transition: "right 300ms ease",
    boxShadow: "0 10px 40px rgba(2,17,43,0.18)",
    zIndex: 10000,
    boxSizing: "border-box",
  };

  const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
    display: menuOpen ? "block" : "none",
    zIndex: 9998,
  };

  // List of nav items: Home uses root "/"
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Course", to: "/course" },
    { label: "Placement", to: "/placement" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <>
      <header style={header}>
        <div style={leftBox}>
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Fusion Training" style={logoStyle} />
          </Link>

          <div style={nameBox}>
            <Link to="/" onClick={closeMenu} style={{ textDecoration: "none" }}>
              <span style={instituteName}>Fusion Advanced</span>
            </Link>
            <span style={tagline}>Industrial Training</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav style={navDesktop}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              style={navLink}
              onClick={() => {
                closeMenu();
                // ensure window scroll to top when navigating SPA
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#1a73e8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#1a1a1a")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={rightIcons}>
          <a href="tel:+917678667181" aria-label="Call" style={{ textDecoration: "none", color: "inherit" }}>
            <FaPhoneAlt style={phoneIcon} />
          </a>

          <button
            style={menuBtn}
            onClick={() => setMenuOpen((s) => !s)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile side menu */}
      <div style={overlay} onClick={() => setMenuOpen(false)} />

      <nav style={sideMenu} aria-hidden={!menuOpen}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            style={{ ...navLink, fontSize: 18 }}
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
