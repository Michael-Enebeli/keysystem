import React from 'react';
import '../styles/Partners.css';

const Partners = () => {
    return (
        <div className="partners">
            <div className="partners-content">
                <h2>Our Partners</h2>
                <p>Creating a synergy with global brands</p>
                <img src="/images/partners.png" alt="image of partners" />
            </div>

            <div className="get-started">
                <div className="content">
                    <h2>Ready to get started?</h2>
                    <span>Send us a mail</span>
                    <p>Join numerous corporations, organizations, and businesses as they scale their teams, tap into new market opportunities and build innovative products with KeySystem Technology.</p>
                    <p>Join thousands of students who are ready to learn new skills or take their career to the next level by enrolling in one of our training programs today.</p>
                    <button>Send us a mail now</button>
                </div>
                <img src="/images/semi-circle.png" alt="image of a semi circle" />
            </div>

        </div>
    );
};

export default Partners;
