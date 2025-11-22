// src/Components/Placement.js
import React, { useState, useEffect } from "react";


const Placement = () => {
  const whatsappNumber = "9773295609";

  const [win, setWin] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  useEffect(() => {
    const handleResize = () => setWin(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isXS = win <= 480;
  const isSM = win > 480 && win <= 768;
  const isMD = win > 768 && win <= 992;

  const outerPadding = isXS
    ? "100px 16px"
    : isSM
    ? "50px 50px"
    : isMD
    ? "40px 32px"
    : "60px 60px";

  const outer = {
    width: "100%",
    minHeight: "100vh",
    padding: outerPadding,
    background: "linear-gradient(#e6f2ff, #f9fcff)",
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  };

  const wrapper = { width: "100%", maxWidth: 1280,margin:"auto" };

  const headerCard = {
    display: "flex",
    flexDirection: isXS ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: isXS ? "20px 16px" : "28px 24px",
    background: "linear-gradient(135deg,#053b67,#075789)",
    borderRadius: 16,
    color: "#fff",
    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
    gap: 20,
    marginTop:"50px"
  };

  const brand = { display: "flex", alignItems: "center", gap: 16, width: "100%" };

  const logoBox = {
    width: isXS ? 50 : isSM ? 60 : 80,
    height: isXS ? 50 : isSM ? 60 : 80,
    borderRadius: 12,
    overflow: "hidden",
    background: "#fff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
  };

  const headerTitle = { fontSize: isXS ? 18 : isSM ? 20 : 24, fontWeight: 800, margin: 0 };

  const statsWrap = {
    marginTop: 36,
    display: "grid",
    gridTemplateColumns: isXS ? "1fr" : isSM ? "repeat(2,1fr)" : "repeat(3,1fr)",
    gap: 20,
  };

  const statCard = {
    background: "#fff",
    padding: "20px 16px",
    borderRadius: 14,
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const mainContent = {
    marginTop: 42,
    display: "grid",
    gridTemplateColumns: isXS ? "1fr" : isSM ? "1fr 1fr" : isMD ? "2fr 1fr" : "2fr 1fr",
    gap: 28,
  };

  const aboutBox = {
    background: "#fff",
    padding: isXS ? 18 : isSM ? 24 : 28,
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    lineHeight: 1.65,
  };

  const sideBox = { background: "#f7fbff", padding: isXS ? 18 : isSM ? 22 : 26, borderRadius: 14, boxShadow: "0 10px 30px rgba(0,0,0,0.07)" };

  const companyGrid = { marginTop: 14, display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fill,minmax(110px,1fr))" };

  const logoCard = {
    background: "#fff",
    padding: "10px",
    borderRadius: 12,
    boxShadow: "0 5px 18px rgba(0,0,0,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    transition: "transform 0.18s ease, box-shadow 0.18s ease",
    cursor: "pointer",
  };

  const logoImg = { width: "80%", height: "80%", objectFit: "contain", display: "block" };

  const buttonPrimary = {
    padding: "12px 18px",
    width: "100%",
    background: "#063970",
    color: "#fff",
    borderRadius: 12,
    border: "none",
    marginTop: 14,
    fontWeight: 700,
    cursor: "pointer",
    fontSize: isXS ? 14 : 16,
  };

  const openWhatsApp = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  
  const base = process.env.PUBLIC_URL || "";
  const companyLogos = [
    { src: `${base}/image/abb.png`, href: "/image/abb.png" },
    { src: `${base}/image/Bosch.webp`, href: "#" },
    { src: `${base}/image/honey.png`, href: "#" },
    { src: `${base}/image/schnider.png`, href: "#" },
    { src: `${base}/image/seimens.jpeg`, href: "#" },
    { src: `${base}/image/uptech.png`, href: "#" },
  ];

  // If you want external CDN links, replace the src with full URL strings.

  return (
    <div style={outer}>
      <div style={wrapper}>
        {/* HEADER */}
        <div style={headerCard}>
          <div style={brand}>
            <div style={logoBox}>
              <img src={`${base}/image/logo5.jpg`} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <h1 style={headerTitle}>Fusion Advanced Industrial Training</h1>
              <p style={{ margin: "4px 0 0", opacity: 0.9, fontSize: isXS ? 12 : 14 }}>100% Practical • Industry-aligned • 100% Placement Support</p>
            </div>
          </div>

          <div style={{ textAlign: isXS ? "left" : "right", marginTop: isXS ? 12 : 0 }}>
            <div style={{ fontSize: 13 }}>Call / WhatsApp</div>
            <div style={{ fontSize: 20, fontWeight: 800 }}>{whatsappNumber}</div>
          </div>
        </div>

        {/* STATS */}
        <div style={statsWrap}>
          <div style={statCard}>
            <div style={{ fontSize: 32, fontWeight: 800 }}>100%</div>
            <div>Placement Support</div>
          </div>
          <div style={statCard}>
            <div style={{ fontSize: 32, fontWeight: 800 }}>1500+</div>
            <div>Students Trained</div>
          </div>
          <div style={statCard}>
            <div style={{ fontSize: 32, fontWeight: 800 }}>300+</div>
            <div>Hiring Companies</div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div style={mainContent}>
          <div style={aboutBox}>
            <h2 style={{ margin: 0, color: "#063970" }}>Why Choose Fusion?</h2>
            <p>Fusion Advanced Industrial Training provides real industrial lab experience, mock interviews, resume building, and practical training for all students.</p>
            <ul>
              <li>Live PLC/SCADA Lab</li>
              <li>Mock Interviews</li>
              <li>Resume Building</li>
              <li>Weekday / Weekend Batches</li>
            </ul>

            <button style={buttonPrimary} onClick={() => openWhatsApp("I want to apply/enroll.")}>Enroll Now</button>

            <button
              style={{ ...buttonPrimary, background: "#fff", color: "#063970", border: "2px solid #063970", marginTop: 10 }}
              onClick={() => openWhatsApp("Corporate hiring enquiry.")}
            >
              Corporate Enquiry
            </button>
          </div>

          {/* SIDEBAR */}
          <div style={sideBox}>
            <h3 style={{ margin: 0, color: "#063970" }}>Our Hiring Partners</h3>

            <div style={companyGrid}>
              {companyLogos.map((logo, i) => (
                <div
                  key={i}
                  style={logoCard}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  {/* linkable logo: put real link in logo.href */}
                  <a
                    href={logo.href || "#"}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "block", width: "100%", textAlign: "center", textDecoration: "none" }}
                  >
                    <img src={logo.src} alt={`partner-${i}`} style={logoImg} />
                  </a>
                </div>
              ))}
            </div>

            <button
              style={{ ...buttonPrimary, background: "#25D366", color: "#083050", marginTop: 20 }}
              onClick={() => openWhatsApp("Admission enquiry.")}
            >
              Contact Admissions
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ marginTop: 50, textAlign: "center", fontSize: 13 }}>© {new Date().getFullYear()} Fusion Advanced Industrial Training</div>
      </div>
    </div>
  );
};

export default Placement;
