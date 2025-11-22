import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Image/logo5.jpg"; // same logo path as Header (optional)
import { Link } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Ensure space for fixed header: match header's non-scrolled height (88) or scrolled height (72)
  // We'll reserve top padding equal to the larger header height so nothing ever jumps under it.
  const HEADER_RESERVED_HEIGHT = 96; // safe reserve (in px) so content never goes under header

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // prevent body scroll while loading splash shows
    document.body.style.overflow = loading ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [loading]);

  const theme = {
    base: "#061025",
    accent1: "#FFB020",
    accent2: "#14B8A6",
    light: "#F1FAFF",
  };

  // page outer ensures top padding equals header reserve so first lines won't hide
  const page = {
    width: "100%",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    background: `linear-gradient(180deg, ${theme.base}, #081a2b 85%)`,
    color: theme.light,
    paddingTop: HEADER_RESERVED_HEIGHT, // ← important: reserve header space
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  };

  const container = {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: "border-box",
  };

  const sectionBase = { paddingTop: 40, paddingBottom: 40 };

  const hero = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    paddingTop: 16,
    paddingBottom: 24,
  };

  const heroTitle = {
    fontSize: "clamp(28px, 4.4vw, 48px)",
    fontWeight: 900,
    maxWidth: 960,
    lineHeight: 1.08,
    margin: 0,
  };

  const heroSubtitle = {
    marginTop: 8,
    fontSize: "clamp(15px, 1.4vw, 19px)",
    color: "rgba(240,248,255,0.92)",
    maxWidth: 900,
    lineHeight: 1.6,
    padding: "12px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)",
  };

  const ctas = { marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" };
  const primaryBtn = {
    padding: "12px 20px",
    borderRadius: 12,
    border: "none",
    fontWeight: 800,
    cursor: "pointer",
    background: `linear-gradient(90deg, ${theme.accent2}, ${theme.accent1})`,
    color: "#041018",
    boxShadow: "0 8px 25px rgba(20,184,166,0.12)",
  };
  const ghostBtn = {
    padding: "12px 20px",
    borderRadius: 12,
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.12)",
    color: theme.light,
    fontWeight: 700,
    cursor: "pointer",
  };

  const statsRow = { marginTop: 18, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" };
  const statCard = {
    minWidth: 140,
    padding: "12px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.04)",
    textAlign: "center",
  };
  const statNum = { fontSize: 20, fontWeight: 900, color: theme.accent1 };
  const statLabel = { fontSize: 13, opacity: 0.9 };

  const carouselWrapper = { borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.03)", boxShadow: "0 18px 40px rgba(0,0,0,0.32)" };
  const carouselImg = { width: "100%", height: "min(60vh,520px)", objectFit: "cover" };

  const servicesGrid = { display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", marginTop: 20 };
  const serviceCard = {
    padding: 18,
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.04)",
    background: "rgba(255,255,255,0.02)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.16)",
  };

  const testimonial = {
    marginTop: 22,
    padding: 16,
    borderRadius: 12,
    maxWidth: 900,
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.04)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
  };

  return (
    <>
      {loading && (
        <div style={{
          position: "fixed", inset: 0, display: "flex", justifyContent: "center", alignItems: "center",
          background: "linear-gradient(130deg,#071226,#0a1b28 70%)", zIndex: 99999, flexDirection: "column"
        }}>
          <img src={logo} style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", marginBottom: 12 }} alt="logo" />
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>Fusion Advance</div>
        </div>
      )}

      <main style={page}>
        <section style={sectionBase}>
          <div style={container}>
            <div style={hero}>
              <h1 style={heroTitle}>
                Upskill for Industry 4.0 — <span style={{ color: theme.accent2 }}>Hands-on</span>, <span style={{ color: theme.accent1 }}>Placement-ready</span> training
              </h1>

              <p style={heroSubtitle}>
                Fusion Advance Trained engineers in Industrial Automation, Embedded Systems, AI for Manufacturing & IT — with real labs, real projects & strong placement support.
              </p>

              <div style={ctas}>
                <button style={primaryBtn}> <Link to="/Register" > Enroll Now</Link></button>
                <button style={ghostBtn}> <Link to="/course"> View Courses </Link></button>
              </div>

              <div style={statsRow}>
                <div style={statCard}><div style={statNum}>98%</div><div style={statLabel}>Placement Rate</div></div>
                <div style={statCard}><div style={statNum}>1200+</div><div style={statLabel}>Students Trained</div></div>
                <div style={statCard}><div style={statNum}>350+</div><div style={statLabel}>Industry Projects</div></div>
              </div>
            </div>
          </div>
        </section>

        <section style={sectionBase}>
          <div style={container}>
            <div style={carouselWrapper}>
              <Carousel interval={3500} controls indicators={false}>
                <Carousel.Item>
                  <img style={carouselImg} src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1600&q=80" alt="slide1" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={carouselImg} src="https://eleks.com/wp-content/uploads/img_large_Trends-blog_-Industrial-automation-engineering.jpg" alt="slide2" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>

        <section style={sectionBase}>
          <div style={container}>
            <h2 style={{ margin: 0, fontWeight: 900, fontSize: "clamp(22px,3vw,30px)" }}>Our Premium Services</h2>
            <p style={{ opacity: 0.85, marginTop: 6 }}>Live labs • Industry mentors • Real projects • Placement support</p>

            <div style={servicesGrid}>
              {[
                ["🤖", "Industrial Automation", ["PLC / SCADA", "HMI", "DCS", "VFD"]],
                ["⚙️", "Embedded Systems", ["PCB Design", "RTOS", "ARM / AVR"]],
                ["💻", "IT & Data", ["Full Stack", "Data Science", "ML / AI"]],
                ["🏗️", "Design & BIM", ["AutoCAD", "Revit", "BIM Modeling"]],
              ].map(([icon, title, items], i) => (
                <div key={i} style={serviceCard}>
                  <div style={{ fontSize: 26 }}>{icon}</div>
                  <h3 style={{ marginTop: 10 }}>{title}</h3>
                  <ul style={{ paddingLeft: 18 }}>
                    {items.map((x, idx) => <li key={idx} style={{ marginBottom: 6 }}>{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={testimonial}>
                <strong>What our students say</strong>
                <p style={{ marginTop: 10 }}>
                  “Fusion Advance gave me practical knowledge & real projects — I cracked my interview easily. The labs & mentors are fantastic!” — <em>Priya</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: 50 }} />
      </main>

      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .carousel-img { height: 40vh !important; }
        }
      `}</style>
    </>
  );
};

export default Home;
