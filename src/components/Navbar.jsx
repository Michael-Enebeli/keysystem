import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const dropdownRef = useRef(null);
    const chevronRef = useRef(null);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                !chevronRef.current.contains(e.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    const toggleHamburger = () => {
        setHamburgerOpen(prev => !prev);
        hamburgerRef.current?.classList.toggle("open");
        document.getElementById("sidebar")?.classList.toggle("open");
    };

    return (
        <nav role="navigation">
            <div className="nav-container">
                <div className="logo">
                    <h2>Key<span>System</span> </h2>
                </div>

                <div
                    className="hamburger"
                    id="hamburger"
                    ref={hamburgerRef}
                    onClick={toggleHamburger}
                >
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>

                <ul className="nav-links" role="list">
                    <li role="listitem"><a href="#">Home</a></li>
                    <li role="listitem"><a href="#">About</a></li>
                    <li
                        role="listitem"
                        className="services-item"
                        ref={dropdownRef}
                    >
                        <button
                            className="dropdown-toggle"
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                            aria-controls="services-dropdown"
                            onClick={toggleDropdown}
                            ref={chevronRef}
                        >
                            Services <i className={`fas fa-chevron-down ${dropdownOpen ? "rotate" : ""}`}></i>
                        </button>
                        <ul
                            className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}
                            id="services-dropdown"
                            role="menu"
                        >
                            <li role="menuitem"><a href="#">Core banking services</a></li>
                            <li role="menuitem"><a href="#">Digital banking</a></li>
                            <li role="menuitem"><a href="#">Mobile&nbsp;lending&nbsp;solutions</a></li>
                            <li role="menuitem"><a href="#">Staff&nbsp;augmented&nbsp;solutions</a></li>
                            <li role="menuitem"><a href="#">Internet audit solutions</a></li>
                            <li role="menuitem"><a href="#">Data warehouse</a></li>
                            <li role="menuitem"><a href="#">Business intelligence</a></li>
                            <li role="menuitem"><a href="#">Keystem&nbsp;software&nbsp;editing</a></li>
                            <li role="menuitem"><a href="#">Cybersecurity solutions</a></li>
                        </ul>
                    </li>
                    <li role="listitem"><a href="#">Contact</a></li>
                </ul>

                <div id="call-button">
                    <button
                        className="call-button"
                        onClick={() => (window.location.href = "tel:+2348107792905")}
                    >
                        <i className="fas fa-phone"></i>
                        +2348107792905
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
