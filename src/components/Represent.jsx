import React from "react";
import "../styles/Represent.css";

const Represent = () => {
  return (
    <article className="represent">
      <h2>What we Represent</h2>
      <span>
        Our relentless pursuit of excellence is the driving force behind our success
      </span>
      <p>
        Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the
        driving force behind our success. Excellence is our legacy, and we are proud to carry
        it forward. Watch the video to see how we are innovating to keep businesses on top of
        their games.
      </p>

    <div className="cards">
      <div className="card">
        <img src="/images/round.png" alt="Vision Icon" />
        <h3>Our Vision</h3>
        <p>
          To be the trusted partner for businesses seeking to leverage technology to improve
          decision-making, unlock new opportunities, and achieve transformative growth.
        </p>
      </div>

      <div className="card">
        <img src="/images/search.png" alt="Mission Icon" />
        <h3>Our Mission</h3>
        <p>
          We bridge the gap between technology and business, delivering customized ICT
          solutions that drive efficiency, growth, and competitive advantage.
        </p>
      </div>
      </div>
    </article>
  );
};

export default Represent;
