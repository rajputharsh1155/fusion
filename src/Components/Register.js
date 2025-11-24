import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    city: ""
  });

  // ---- CHANGE THIS NUMBER ----
  const WHATSAPP_NUMBER = "+917678667181";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const message = `
📢 *New Registration - Fusion Advance Industrial Training*

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
✉️ Email: ${formData.email}
📘 Course: ${formData.course}
📍 City: ${formData.city}

Please contact the student as soon as possible!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
    alert("Registration Submitted! Our team will contact you soon.");
  };

  // --------- INLINE STYLES ----------
  const container = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #6c63ff, #4adede)",
    fontFamily: "'Poppins', sans-serif",
  };

  const card = {
    background: "white",
    width: "100%",
    maxWidth: "480px",
    padding: "35px",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    textAlign: "center",
  };

  const title = {
    fontSize: "26px",
    fontWeight: "800",
    marginBottom: "10px",
    color: "#222",
  };

  const subtitle = {
    fontSize: "16px",
    marginBottom: "22px",
    color: "#666",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "14px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    transition: "0.2s",
  };

  const selectStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "14px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    fontSize: "15px",
    outline: "none",
    background: "white",
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "#6c63ff",
    color: "white",
    fontSize: "18px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
    fontWeight: "700",
  };

  const buttonHover = {
    background: "#5848ff",
  };

  return (
    <div style={container}>
      <div style={card}>
        <h1 style={title}>Fusion Advance Industrial Training</h1>
        <p style={subtitle}>Register Now & Start Your Journey 🚀</p>

        <form onSubmit={sendToWhatsApp}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
          />

          <select
            style={selectStyle}
            name="course"
            required
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Automation Training">Automation Training</option>
            <option value="PLC Programming">PLC Programming</option>
            <option value="Industrial SCADA">Industrial SCADA</option>
            <option value="HMI Designing">HMI Designing</option>
            <option value="Panel Wiring">Panel Wiring</option>
          </select>

          <input
            style={inputStyle}
            type="text"
            name="city"
            placeholder="City"
            required
            onChange={handleChange}
          />

          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target.style.background = "#5848ff")
            }
            onMouseLeave={(e) =>
              (e.target.style.background = "#6c63ff")
            }
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
