import React from 'react';
import "../styles/Process.css";

const Process = () => {
  return (
    <div className="process">
    <div className="processes">
      <h2>Our Process</h2>
      <p>At KeySystem, we leave you with a lasting impression</p>

      <div className="strategy">
        <div className="text">
          <h3>Strategic Consultation </h3>
          <p>We kick off with a strategic consultation to <br /> understand your basic goals and audience.</p>
        </div>
        <img src="/images/cube.png" alt="image of a cube" />
      </div>

      <div className="bottom-cards">
        <div className="box">
          <div className="text">
            <h3>Collaboration</h3>
            <p>At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy.</p>
          </div>
          <img src="/images/handshake.png" alt="image of a handshake" />
          </div>

        <div className="box strategy-card">
          <div className="text">
            <h3> Delivery </h3>
            <p>Our delivery rate is 100%. Our Clients deserves nothing less</p>
          </div>
          <img src="/images/check.png" alt="image of a check-icon" />
        </div>
      </div>
     </div>
    </div>
  );
};

export default Process;
