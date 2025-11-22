import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Consultancy = () => {
  const pageStyle = {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f3f5f7",
    color: "#222",
  };

  const carouselSection = {
    width: "100%",
    height: "520px",
    position: "relative",
    overflow: "hidden",
  };

  const carouselImg = {
    width: "100%",
    height: "520px",
    objectFit: "cover",
    filter: "brightness(0.85)",
  };

  const captionTitle = {
    fontSize: "3rem",
    fontWeight: "700",
    textShadow: "0px 4px 10px rgba(0,0,0,0.6)",
  };

  const captionText = {
    fontSize: "1.2rem",
    opacity: 0.9,
  };

  const serviceSection = {
    padding: "70px 20px",
    textAlign: "center",
  };

  const serviceTitle = {
    fontSize: "2.8rem",
    fontWeight: "700",
    color: "#0b4570",
    marginBottom: "50px",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const card = {
    background: "linear-gradient(145deg, #0a3047, #102f3c)",
    padding: "35px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
    transition: "0.3s",
    cursor: "pointer",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
  };

  const cardTitle = {
    fontSize: "1.9rem",
    marginBottom: "15px",
    color: "#b7ca27",
  };

  const cardText = {
    fontSize: "1.05rem",
    color: "white",
  };

  const [hoverIndex, setHoverIndex] = React.useState(null);

  return (
    <div style={pageStyle}>
      
      {/* ---------- HERO CAROUSEL ---------- */}
      <section style={carouselSection}>
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img
              style={carouselImg}
              src="/Image/fusion-training.png"
              alt="Fusion Advance Industrial Training"
            />

            <Carousel.Caption>
              <h3 style={captionTitle}>Fusion Advance Industrial Training</h3>
              <p style={captionText}>
                Advanced Consultancy, Career Guidance & Professional Courses
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* ---------- SERVICE SECTION ---------- */}
      <section style={serviceSection}>
        <h2 style={serviceTitle}>Our Consultancy Services</h2>

        <div style={grid}>
          {[
            {
              title: "Medical",
              items: ["MBBS", "MD/MS", "BAMS", "B.Pharm"],
            },
            {
              title: "Engineering",
              items: ["B.Tech", "M.Tech", "Diploma", "Lateral Entry B.Tech"],
            },
            {
              title: "Management",
              items: ["BBA", "MBA", "PGDM"],
            },
            {
              title: "Law",
              items: ["LLB", "BA LLB", "MA LLB"],
            },
            {
              title: "Computer Science",
              items: ["BCA", "MCA"],
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{
                ...card,
                ...(hoverIndex === index ? cardHover : {}),
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <h3 style={cardTitle}>{service.title}</h3>

              {service.items.map((itm, i) => (
                <p key={i} style={cardText}>
                  {itm}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
