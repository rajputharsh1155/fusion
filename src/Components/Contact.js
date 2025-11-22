import React from "react";

const Contact = () => {
    // ===== Global Styles =====
    const page = {
        fontFamily: "'Poppins', sans-serif",
        width: "100%",
        overflowX: "hidden",
        background: "#f5f7fa",
    };

    // ===== HERO SECTION =====
    const hero = {
        height: "450px",
        backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
    };

    const heroTitle = {
        fontSize: "3rem",
        fontWeight: "700",
        letterSpacing: "1px",
        marginBottom: "10px",
        animation: "fadeIn 1.2s ease-in-out",
    };

    const heroSub = {
        fontSize: "1.4rem",
        fontWeight: "400",
        animation: "fadeIn 1.6s ease-in-out",
    };

    // ===== CONTACT SECTION =====
    const section = {
        padding: "50px 20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
    };

    const card = {
        flex: "1 1 45%",
        minWidth: "320px",
        padding: "30px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.9)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        animation: "fadeInUp 1s ease",
    };

    const heading = {
        fontSize: "1.8rem",
        fontWeight: "700",
        marginBottom: "15px",
        color: "#063b61",
        position: "relative",
    };

    const line = {
        width: "60px",
        height: "4px",
        background: "#007bff",
        borderRadius: "5px",
        marginBottom: "20px",
    };

    // Contact info text
    const infoText = {
        fontSize: "1.2rem",
        lineHeight: "1.8",
        marginBottom: "20px",
        color: "#333",
    };

    const input = {
        padding: "14px",
        width: "100%",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        marginBottom: "15px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };

    const textarea = {
        ...input,
        height: "120px",
        resize: "vertical",
    };

    const button = {
        padding: "14px",
        width: "100%",
        background: "#007bff",
        border: "none",
        borderRadius: "8px",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "0.3s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    };

    const buttonHover = {
        background: "#0056b3",
        transform: "translateY(-3px)",
    };

    return (
        <div style={page}>

            {/* ---------------- HERO ---------------- */}
            <div style={hero}>
                <h1 style={heroTitle}>Fusion Advance Industrial Training</h1>
                <p style={heroSub}>Join us for world-class industrial training & career growth.</p>
            </div>

            {/* ---------------- CONTENT SECTION ---------------- */}
            <div style={section}>

                {/* CONTACT INFO CARD */}
                <div style={card}>
                    <h2 style={heading}>Contact Us</h2>
                    <div style={line}></div>

                    <p style={infoText}>
                        📍 <b>Office:</b> E-25, 1st Floor, Sector 03, Noida, U.P 201301
                        <br /><br />
                        📍 <b>Regd Office:</b> E-25 Ground Floor, Noida, U.P 201301
                        <br /><br />
                        📞 <b>Phone:</b> +91-9773295609, +91-9773295609
                        <br /><br />
                        ✉️ <b>Email:</b> {" "}
                        <a href="hr.fusiontraining@gmail.com" style={{ color: "#007bff" }}>hr.fusiontraining@gmail.com</a>
                        <br />
                       
                    </p>
                </div>

                {/* CONTACT FORM CARD */}
                <div style={card}>
                    <h2 style={heading}>Send Us a Message</h2>
                    <div style={line}></div>

                    <form>
                        <input type="text" placeholder="First Name" required style={input} />
                        <input type="text" placeholder="Last Name" required style={input} />
                        <input type="tel" placeholder="Contact" required style={input} />
                        <input type="email" placeholder="Email Address" required style={input} />
                        <textarea placeholder="Your Message" required style={textarea}></textarea>

                        <button
                            type="submit"
                            style={button}
                            onMouseEnter={(e) => Object.assign(e.target.style, buttonHover)}
                            onMouseLeave={(e) => Object.assign(e.target.style, button)}
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
