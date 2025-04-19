import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-logo">
          <h2>
            Key<span>System</span>
          </h2>
          <p>&copy; KeySystem Technology Limited. All rights reserved</p>
        </div>

        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Core refresh</li>
            <li>Staff augmented solutions</li>
            <li>Application management services</li>
            <li>Risk management & internal audit solutions</li>
            <li>Evaluation & enhancement services</li>
            <li>Data warehousing & Business Intelligence (BI)</li>
            <li>Solution Assurance and validation</li>
            <li>Enterprise Document Management Services</li>
            <li>Digital banking and financial inclusion</li>
            <li>KeySystem software testing</li>
            <li>Online/mobile lending solutions</li>
            <li>Cybersecurity solutions</li>
          </ul>
        </div>
      </div>

      <div className="footer-section">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="contact-details">
          <h3>Contact</h3>
          <div className="locations">
            <div className="location">
              <h4>Nigeria</h4>
              <p>
                55G Adebisi Omotola Close, <br />
                Off Samuel Adedoyin Street, <br />
                Victoria Islands
              </p>
            </div>
            <div className="location">
              <h4>United Kingdom</h4>
              <p>
                39 Off Kenyan Lane, Off Moston <br />
                Lane, Moston, Manchester, <br />
                United Kingdom M40 9JG
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="location-nigeria">
          <h3>Nigeria</h3>
          <a href="tel:+2348107792905">tel: +2348107792905</a>
        </div>

        <div className="other-locations">
          <div className="country">
            <h3>United Kingdom</h3>
            <a href="tel:+441619481444">tel: +44 161 948 1444</a>
          </div>
          <div className="country">
            <h3>United Arab Emirates</h3>
            <a href="tel:+971504238817">tel: +971 50 423 8817</a>
          </div>
          <div className="country">
            <h3>Canada</h3>
            <a href="tel:+16479771435">tel: +1 647 977 1435</a>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="social-icons">
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#twitter"><i className="fab fa-x-twitter"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
        </div>

        <div className="footer-contacts">
          <div className="info-block">
            <h3>Nigeria</h3>
            <a href="tel:+2348107792905">tel: +234 810 779 2905</a>
          </div>
          <div className="info-block">
            <h3>Email</h3>
              <a href="mailto:chukwudienebeli81@gmail.co">chukwudienebeli81@gmail.com</a>
          </div>
          <div className="info-block myself">
            <h3> Developer </h3>
            <a href="https://www.michaelenebeli.com.ng" target="blank"> Michael Enebeli </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
