import React from "react";
import "../styles/Certification.css";

const Certification = () => {
    const certificates = [
        { file: "dss.png", alt: "dss-logo" },
        { file: "iso.png", alt: "iso-logo" },
        { file: "cybersecurity.png", alt: "cybersecurity-logo" },
        { file: "gdpr.jpeg", alt: "gdpr-logo" },
        { file: "ndpr.jpeg", alt: "ndpr-logo" },
        { file: "iso.png", alt: "iso-logo" },
        { file: "sarbanes.png", alt: "sarbanes-logo" },
        { file: "togaf.jpeg", alt: "togaf-logo" },
        { file: "iso.png", alt: "iso-logo" },
        { file: "aicpa.jpeg", alt: "aicpa-logo" },
        { file: "aicpa.jpeg", alt: "aicpa-logo" },
        { file: "cobit.jpeg", alt: "cobit-logo" },
        { file: "ssae.png", alt: "ssae-logo" },
        { file: "pcaob.png", alt: "pcaob-logo" },
        { file: "coso.png", alt: "coso-logo" },
        { file: "ssae-16.png", alt: "ssae-16-logo" },
        { file: "iaasb.png", alt: "iaasb-logo" },
        { file: "isae-34.png", alt: "isae-34-logo" }
    ];

    const trustCertificates = [
        { file: "lapo.png", alt: "lapo-logo" },
        { file: "iso.png", alt: "iso-logo" },
        { file: "sterling.jpeg", alt: "Sterling-logo" },
        { file: "crusader.png", alt: "crusader-logo" },
        { file: "nafc.jpg", alt: "nafc-logo" },
        { file: "nbf.jpg", alt: "nbf-logo" },
        { file: "military.jpg", alt: "military-logo" },
        { file: "stanbic.jpeg", alt: "stanbic-logo" },
        { file: "bank.jpg", alt: "bank-logo" },
        { file: "cbs.png", alt: "cbs-logo" },
        { file: "santander.png", alt: "Santander-logo" }
    ];

    return (
        <div className="cert-container">
            <div className="certification">
                <h2>Compliance Certification / Standards We Specialize In</h2>
                <p>
                    Elevate Your Organization's Security Posture with Our
                    Compliance/Standards Consulting Services
                </p>
                <button> Contact Us</button>

                <div className="certification-logos">
                    {certificates.map(({ file, alt }, index) => (
                        <img key={index} src={`/images/${file}`} alt={alt} />
                    ))}
                </div>
                <h2 style={{ marginTop: "50px" }}>They Trust Us</h2>
                <p> And so can you </p>
                <div className="trust-logos">
                    {trustCertificates.slice(0, 8).map(({ file, alt }, index) => (
                        <img key={index} src={`/images/${file}`} alt={alt} />
                    ))}

                    <div className="last-row">
                        {trustCertificates.slice(8).map(({ file, alt }, index) => (
                            <img key={index} src={`/images/${file}`} alt={alt} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Certification;
