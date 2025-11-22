import React from 'react';
import '../Style/service.css';

const Service = () => {
    return (
        <div className="service-container">
            <div className="service">
                <div className="service-icon-container">
                    <img src="path/to/ai-icon.png" alt="Custom Artificial Intelligence API Solutions" className="service-icon" />
                </div>
                <div className="service-content">
                    <div className="service-content-text">
                        <h2>Custom Artificial Intelligence API Solutions</h2>
                        <p>
                            Our developers integrate artificial intelligence software using machine learning algorithms, natural language processing, computer vision, and other AI techniques to build web APIs that can be used for various applications, such as customer service chatbots, fraud detection, recommendation engines, and predictive analytics.
                        </p>
                    </div>
                    <div className="service-content-image"></div>
                </div>
            </div>

            <div className="service">
                <div className="service-icon-container">
                    <img src="path/to/api-icon.png" alt="Custom API Interface Integrations" className="service-icon" />
                </div>
                <div className="service-content">
                    <div className="service-content-text">
                        <h2>Custom API Interface Integrations</h2>
                        <p>
                            We specialize in building custom REST APIs to enhance your current off-the-shelf solution or integrate third-party public APIs that enable your software solution to seamlessly interface with other apps, devices, and business systems.
                        </p>
                    </div>
                    <div className="service-content-image"></div>
                </div>
            </div>

            <div className="service">
                <div className="service-icon-container">
                    <img src="path/to/implementation-icon.png" alt="Custom API Implementations" className="service-icon" />
                </div>
                <div className="service-content">
                    <div className="service-content-text">
                        <h2>Custom API Implementations</h2>
                        <p>
                            We implement internal and external API documentation solutions that preemptively solve code issues regarding server communications, content creation & management, data sharing, business logic, and microservices.
                        </p>
                    </div>
                    <div className="service-content-image"></div>
                </div>
            </div>

            <div className="service">
                <div className="service-icon-container">
                    <img src="path/to/testing-icon.png" alt="Automated API Testing" className="service-icon" />
                </div>
                <div className="service-content">
                    <div className="service-content-text">
                        <h2>Automated API Testing</h2>
                        <p>
                            Our engineers and quality assurance (QA) specialists use automated unit testing, functional testing, and load testing tools and best practices to check and learn from the performance & functionality of mission-critical business apps.
                        </p>
                    </div>
                    <div className="service-content-image"></div>
                </div>
            </div>
        </div>
    );
};

export default Service;
