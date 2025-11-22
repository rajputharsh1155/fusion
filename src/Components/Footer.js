
import React, { useState, useEffect } from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from "../Image/logo5.jpg";



const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setBackgroundIndex((prev) => (prev + 1) % 3), 9000);
    return () => clearInterval(interval);
  }, []);

  const backgrounds = [
    'linear-gradient(135deg,#0b1f2b 0%, #072033 40%, #0a3b3b 100%)',
    'linear-gradient(135deg,#071226 0%, #0b2740 40%, #112b45 100%)',
    'linear-gradient(135deg,#071226 0%, #11324a 50%, #0b2240 100%)',
  ];

  const footerStyle = {
    background: backgrounds[backgroundIndex],
    color: '#fff',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '40px 10px 0 10px',
    transition: 'background 1.6s ease-in-out',
    boxShadow: '0 -8px 40px rgba(0, 0, 0, 0.35)',
    fontFamily: "'Poppins', sans-serif",
  };

  const footerContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: 1200,
    margin: '0 auto',
    padding: windowWidth >= 1025 ? '30px 40px' : windowWidth >= 768 ? '24px' : '18px',
    position: 'relative',
    zIndex: 2,
    gap: 18,
  };

  const col = {
    flex: windowWidth >= 1025 ? '1 1 240px' : windowWidth >= 768 ? '1 1 220px' : '1 1 100%',
    margin: '6px',
    textAlign: windowWidth <= 768 ? 'center' : 'left',
  };

  const headingStyle = {
    fontSize: '1.2rem',
    marginBottom: '12px',
    fontWeight: 800,
    color: '#fff',
  };

  const listStyle = { listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.9)' };
  const liStyle = { marginBottom: 10, cursor: 'pointer' };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    justifyContent: windowWidth <= 768 ? 'center' : 'flex-start',
    marginBottom: 10,
  };

  const logoStyle = {
    height: 62,
    width: 62,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(255,255,255,0.08)',
  };

  const contactStyle = { marginTop: 8, color: 'rgba(255,255,255,0.92)' };

  const socialWrap = {
    display: 'flex',
    gap: 12,
    justifyContent: windowWidth <= 768 ? 'center' : 'flex-start',
    marginTop: 18,
  };

  const socialBtn = {
    width: 44,
    height: 44,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.04)',
    color: '#fff',
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.06)',
  };

  const footerBottomStyle = {
    marginTop: 28,
    textAlign: 'center',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: 18,
    paddingBottom: 28,
    color: 'rgba(255,255,255,0.86)',
    fontSize: 14,
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContainerStyle}>
        <div style={col}>
          <div style={logoContainerStyle}>
            <img src={logo} alt="Fusion Advance logo" style={logoStyle} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Fusion Advance</div>
              <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>Industrial Training Institute</div>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            Practical, industry-aligned training with strong placement support. Labs • Projects • Mentors • Certifications.
          </p>
        </div>

        <div style={col}>
          <div style={headingStyle}>Courses</div>
          <ul style={listStyle}>
            <li style={liStyle}>Industrial Automation</li>
            <li style={liStyle}>PLC / SCADA</li>
            <li style={liStyle}>Embedded Systems</li>
            <li style={liStyle}>Data Science & AI</li>
            <li style={liStyle}>AutoCAD / Revit</li>
          </ul>
        </div>

        <div style={col}>
          <div style={headingStyle}>Programs</div>
          <ul style={listStyle}>
            <li style={liStyle}>Short-term (3 months)</li>
            <li style={liStyle}>Advanced Diploma</li>
            <li style={liStyle}>Corporate Training</li>
            <li style={liStyle}>Campus Hiring Drives</li>
          </ul>
        </div>

        <div style={col}>
          <div style={headingStyle}>Contact</div>
          <div style={contactStyle}>📍 Noida Sector 3, 201301</div>
          <div style={contactStyle}>📞 +91 9773295609</div>
          <div style={contactStyle}>hr.fusiontraining@gmail.com</div>

          <div style={socialWrap} aria-label="Social links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={socialBtn}><FaInstagram /></a>
            <a href="https://wa.me/919773295609?text=Hello%20Fusion%20Advance" target="_blank" rel="noopener noreferrer" style={socialBtn}><FaWhatsapp /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={socialBtn}><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={socialBtn}><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <div>© 2025 Fusion Advance Industrial Training — All Rights Reserved</div>
        <div style={{ marginTop: 6, color: 'rgba(255,255,255,0.6)' }}>Designed & maintained by Harsh Singh</div>
      </div>
    </footer>
  );
};

export default Footer;
