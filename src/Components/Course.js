import React, { useState, useEffect } from "react";
import plc from "../Image/plc.webp";
import web from "../Image/web.jpg";
import da from "../Image/da.jpg";
import ds from "../Image/ds.jpg";
import dg from "../Image/dg.png";
import seo from "../Image/seo.jpg";
import indauto from "../Image/indauto.webp";
import embd from "../Image/embd.webp";
import rct from "../Image/rct.jpeg";
import Admison from "../Image/admison.webp";
import sm from "../Image/sm.jpg";
import full from "../Image/full.jpg";

const Course = () => {
  const whatsappNumber = "+917678667181";

  const [win, setWin] = useState(window.innerWidth);

  useEffect(() => {
    const r = () => setWin(window.innerWidth);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);

  /* ---- ANIMATION ---- */
  useEffect(() => {
    const sheet = document.styleSheets[0];
    try {
      sheet.insertRule(`
        @keyframes fadePop {
          0% { opacity:0; transform: translateY(35px) scale(.96); }
          100% { opacity:1; transform: translateY(0) scale(1); }
        }
      `);
    } catch {}
  }, []);

  /* ---- PAGE CONTAINER ---- */
  const pageBox = {
    width: "100%",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #eef6ff, #d9eaff, #c4dbff, #e2f2ff)",
    boxSizing: "border-box",
  };

  /* ---- HEADINGS ---- */
  const topHeading = {
    textAlign: "center",
    fontSize: win < 600 ? "28px" : "42px",
    fontWeight: "800",
    color: "#063970",
    marginBottom: "15px",
    letterSpacing: ".5px",
    animation: "fadePop .6s ease",
  };

  const subHeading = {
    textAlign: "center",
    fontSize: win < 600 ? "15px" : "18px",
    fontWeight: "500",
    color: "#0b2d52",
    marginBottom: "45px",
    padding: "0 12px",
    animation: "fadePop .8s ease",
  };

  /* ---- GRID LAYOUT ---- */
  const grid = {
    display: "grid",
    gridTemplateColumns:
      win > 1200
        ? "repeat(4, 1fr)"
        : win > 992
        ? "repeat(3, 1fr)"
        : win > 600
        ? "repeat(2, 1fr)"
        : "repeat(1, 1fr)",
    gap: "28px",
    width: "100%",
    maxWidth: "1300px",
    margin: "0 auto",
  };

  /* ---- CARDS ---- */
  const card = {
    background: "#063970",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 6px 20px rgba(0,0,0,.20)",
    textAlign: "center",
    transition: ".3s",
    animation: "fadePop .6s ease",
    minHeight: "370px",
  };

  const image = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "12px",
    transition: ".3s",
  };

  const ctitle = {
    fontSize: "20px",
    color: "#fff",
    fontWeight: "700",
    marginBottom: "5px",
  };

  const cdesc = {
    color: "#e8f1ff",
    fontSize: "15px",
    marginBottom: "15px",
    lineHeight: "1.4",
  };

  const extra = {
    color: "#cfe4ff",
    fontSize: "14px",
    marginTop: "-8px",
    marginBottom: "12px",
  };

  const btn = {
    padding: "12px 20px",
    background: "#28a745",
    color: "#fff",
    borderRadius: "6px",
    border: "none",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    transition: ".3s",
    width: "100%",
  };

  /* ---- COURSE DATA ---- */
  const all = [
    {
      img: plc,
      title: "PLC / SCADA Full Course (Placement)",
      dur: "3 Month",
      price: "24999",
      extra: "✔ 100% Lab Practical • ✔ Industry Grade Projects",
    },
    {
      img: web,
      title: "SAP Full Course",
      dur: "3 Month",
      price: "24999",
      extra: "✔ Job Oriented Module • ✔ Live Case Studies",
    },
    {
      img: indauto,
      title: "Industrial Automation (Placement)",
      dur: "3 Month",
      price: "24999",
      extra: "✔ Real PLC Panels • ✔ Hands-on Industrial Tools",
    },
    {
      img: full,
      title: "Full Stack Developer (Placement)",
      dur: "6 Month",
      price: "24999",
      extra: "✔ MERN Stack • ✔ Internship + Portfolio",
    },
    {
      img: rct,
      title: "AutoCAD 2D / 3D / HVAC",
      dur: "6 Month",
      price: "23999",
      extra: "✔ Real Architecture Projects • ✔ Certificate",
    },
    {
      img: sm,
      title: "Electrical Design & Drafting",
      dur: "3 Month",
      price: "19999",
      extra: "✔ Industrial Drawings • ✔ Live Calculations",
    },
    {
      img: da,
      title: "Data Analyst (Placement)",
      dur: "4 Month",
      price: "24999",
      extra: "✔ Power BI + Excel • ✔ Live Dashboards",
    },
    {
      img: ds,
      title: "Data Science (Placement)",
      dur: "6 Month",
      price: "27999",
      extra: "✔ Python + ML • ✔ Real AI Projects",
    },
    {
      img: embd,
      title: "Embedded System (Placement)",
      dur: "4 Month",
      price: "22999",
      extra: "✔ Microcontrollers • ✔ IoT Practical",
    },
    {
      img: dg,
      title: "Digital Marketing (Placement)",
      dur: "3 Month",
      price: "19999",
      extra: "✔ SEO + Ads • ✔ Internship Included",
    },
    {
      img: seo,
      title: "SEO Mastery (Placement)",
      dur: "3 Month",
      price: "14999",
      extra: "✔ Google Ranking Practical • ✔ Live Tools",
    },
    {
      img: Admison,
      title: "After 12th – All Branch Admission",
      dur: "Contact Us",
      price: "Free",
      extra: "✔ Career Guidance • ✔ Best Job Options",
    },
  ];

  /* ---- WHATSAPP HANDLER ---- */
  const openWhatsApp = (title) => {
    const msg = `Hello, I want more details about the course: ${title}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div style={pageBox}>
      <h1 style={topHeading}>Our Professional Courses</h1>
      <p style={subHeading}>
        India’s No.1 Industrial Training Institute – 100% Practical + 100% Placement Support
      </p>

      <div style={grid}>
        {all.map((c, i) => (
          <div
            key={i}
            style={card}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <img
              src={c.img}
              style={image}
              alt=""
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />

            <h2 style={ctitle}>{c.title}</h2>

            <p style={cdesc}>Course Duration: {c.dur}</p>

            {/* NEW EXTRA LINES ADDED HERE */}
            <p style={extra}>{c.extra}</p>

            <button
              style={btn}
              onClick={() => openWhatsApp(c.title)}
              onMouseEnter={(e) => (e.target.style.background = "#218838")}
              onMouseLeave={(e) => (e.target.style.background = "#28a745")}
            >
              ₹ {c.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
