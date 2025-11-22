import React, { useState, useEffect } from "react";
import vision from "../Image/co.jpg";
import mision from "../Image/founder.jpg";
import value from "../Image/value.jpg";
import goal from "../Image/goal.png";

const AboutUs = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const page = {
    fontFamily: "'Poppins', sans-serif",
    width: "100%",
    minHeight: "100vh",
    background: "#f0f4f8",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  };

  const heroSection = {
    width: "100%",
    textAlign: "center",
    padding: width > 1024
      ? "100px 20px 80px 20px"
      : width > 768
      ? "80px 20px 60px 20px"
      : "60px 15px 40px 15px",
    background: "linear-gradient(135deg, #1a73e8 0%, #63a4ff 100%)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: width > 768 ? "25px" : "15px",
  };

  const heroTitle = {
    fontSize: width > 1024 ? "48px" : width > 768 ? "36px" : "28px",
    fontWeight: 800,
    lineHeight: 1.2,
    paddingTop: width > 1024 ? "20px" : width > 768 ? "15px" : "80px",
  };

  const heroText = {
    fontSize: width > 1024 ? "20px" : width > 768 ? "18px" : "16px",
    maxWidth: width > 768 ? 700 : 300,
    lineHeight: 1.6,
  };

  const heroButton = {
    padding: "12px 30px",
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#1a73e8",
    fontWeight: 600,
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const sectionBase = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: width > 1024
      ? "70px 20px"
      : width > 768
      ? "50px 15px"
      : "30px 10px",
    flexDirection: "column",
    alignItems: "center",
    gap: width > 768 ? "50px" : "30px",
    boxSizing: "border-box",
  };

  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: width > 768 ? 30 : 15,
    maxWidth: 1200,
    width: "100%",
  };

  const card = {
    flex: width > 1024 ? "1 1 280px" : width > 768 ? "1 1 45%" : "1 1 100%",
    background: "#fff",
    borderRadius: 20,
    padding: width > 768 ? 25 : 15,
    textAlign: "center",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  };

  const cardImg = {
    width: "100%",
    height: width > 768 ? 180 : 140,
    objectFit: "cover",
    borderRadius: 16,
    marginBottom: 20,
    transition: "transform 0.4s ease",
  };

  const cardTitle = {
    fontSize: width > 768 ? 20 : 16,
    fontWeight: 700,
    color: "#063970",
    marginBottom: 10,
  };

  const cardText = {
    fontSize: width > 768 ? 16 : 14,
    color: "#555",
    lineHeight: 1.6,
  };

  const foundersContainer = {
    width: "100%",
    maxWidth: 1200,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: width > 768 ? 30 : 15,
    padding: width > 1024
      ? "70px 20px 100px 20px"
      : width > 768
      ? "50px 15px 70px 15px"
      : "30px 10px 50px 10px",
    background: "#e6f2ff",
    borderRadius: 16,
    boxSizing: "border-box",
  };

  const founderCard = {
    flex: width > 1024 ? "1 1 220px" : width > 768 ? "1 1 45%" : "1 1 100%",
    background: "#fff",
    borderRadius: 20,
    padding: 20,
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
  };

  const founderImg = {
    width: width > 768 ? 120 : 100,
    height: width > 768 ? 120 : 100,
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: 12,
    border: "4px solid #1a73e8",
    transition: "transform 0.4s ease",
  };

  const founderName = {
    fontSize: width > 768 ? 18 : 16,
    fontWeight: 700,
    color: "#063970",
    marginBottom: 6,
  };

  const founderTitle = {
    fontSize: width > 768 ? 14 : 12,
    color: "#1a73e8",
    fontWeight: 600,
  };

  // ---------- HOVER HANDLERS ----------
  const handleHoverIn = (e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.25)";
  };
  const handleHoverOut = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.15)";
  };
  const handleImgHoverIn = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };
  const handleImgHoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  // ---------- RENDER ----------
  return (
    <div style={page}>
      {/* HERO SECTION */}
      <section style={heroSection}>
        <div style={heroTitle}>Fusion Advanced Industrial Training</div>
        <div style={heroText}>
          We provide hands-on industrial training with guaranteed placement
          support. Learn from experts, work on real projects, and kickstart
          your career in tech & industry.
        </div>
        <button
          style={heroButton}
          onMouseEnter={handleImgHoverIn}
          onMouseLeave={handleImgHoverOut}
        >
          Explore Courses
        </button>
      </section>

      {/* FEATURE CARDS */}
      <section style={sectionBase}>
        <div style={cardsContainer}>
          {[
            {
              img: vision,
              title: "Our Vision",
              text: "Fusion Industrial Training, we’re passionate about helping students like you bridge the gap between classroom learning and real-world applications. Our programs cover electrical, computer science, mechanical, civil, and architecture, and are designed to give you hands-on, practical skills that matter in today’s industry.",
            },
            {
              img: mision,
              title: "Our Mission",
              text: "Deliver world-class hands-on training, real projects, and industry-aligned guidance to help students excel in careers.",
            },
            {
              img: value,
              title: "Our Values",
              text: "Integrity, excellence, innovation, and commitment to providing top-tier placement support.",
            },
            {
              img: goal,
              title: "Our Goals",
              text: "Be the most trusted partner for students seeking career growth, industry exposure, and guaranteed placement assistance.",
            },
          ].map((c, idx) => (
            <div
              key={idx}
              style={card}
              onMouseEnter={handleHoverIn}
              onMouseLeave={handleHoverOut}
            >
              <img
                src={c.img}
                alt={c.title}
                style={cardImg}
                onMouseEnter={handleImgHoverIn}
                onMouseLeave={handleImgHoverOut}
              />
              <div style={cardTitle}>{c.title}</div>
              <div style={cardText}>{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={foundersContainer}>
        {[
          { img: vision, name: "Lata Joshi", title: "Founder" },
          { img: mision, name: "Lata Joshi", title: "Co-Founder" },
        ].map((f, idx) => (
          <div
            key={idx}
            style={founderCard}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
          >
            <img src={f.img} alt={f.title} style={founderImg} />
            <div style={founderName}>{f.name}</div>
            <div style={founderTitle}>{f.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
