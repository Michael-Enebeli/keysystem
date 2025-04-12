import React from "react";
import "../styles/Offerings.css";

const offerings = [
  "Core banking services",
  "Digital banking & financial inclusion",
  "Online/mobile lending solutions",
  "Staff augmented solutions",
  "Internet audit solutions",
  "Data warehouse",
  "Business intelligence",
  "Keystem software editing",
  "Cybersecurity solutions",
];

const Offerings = () => {
  return (
    <main>
      <div>
        <h2>Our Offerings</h2>
        <p>
          Leverage KeySystem's cutting-edge expertise to transform your business.
          Our tailored software and cybersecurity solutions drive efficiency, security, and growth.
          We empower businesses to thrive in the digital age.
        </p>
        <button>Learn More</button>

        <ul>
          {offerings.map((item, index) => (
            <li key={index}>
              {item}
              <img src="/images/arrow.png" alt="arrow" />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Offerings;
