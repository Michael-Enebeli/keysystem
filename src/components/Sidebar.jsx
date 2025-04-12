import React, { useState, useEffect, useRef } from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownMenuRef = useRef(null);
  const chevronRef = useRef(null);
  const sidebarRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };


  useEffect(() => {
    if (dropdownMenuRef.current) {
      if (isDropdownOpen) {
        dropdownMenuRef.current.style.maxHeight =
          dropdownMenuRef.current.scrollHeight + "px";
      } else {
        dropdownMenuRef.current.style.maxHeight = "0px";
      }
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () =>
      document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div id="sidebar" className="sidebar" ref={sidebarRef}>
      <ul className="sidebar-links" role="list">
        <li role="listitem">
          <a href="#">Home</a>
        </li>
        <li role="listitem">
          <a href="#">About</a>
        </li>
        <li role="listitem">
          <button
            className="dropdown-toggle-sidebar"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            Services{" "}
            <i
              className={`fas fa-chevron-down ${isDropdownOpen ? "rotate" : ""}`}
              ref={chevronRef}
            ></i>
          </button>
          <ul
            className="dropdown-menu-sidebar"
            role="menu"
            ref={dropdownMenuRef}
          >
            <li role="menuitem">
              <a href="#">Core banking services</a>
            </li>
            <li role="menuitem">
              <a href="#">Digital banking & financial inclusion</a>
            </li>
            <li role="menuitem">
              <a href="#">Online/mobile lending solutions</a>
            </li>
            <li role="menuitem">
              <a href="#">Staff augmented solutions</a>
            </li>
            <li role="menuitem">
              <a href="#">Internet audit solutions</a>
            </li>
            <li role="menuitem">
              <a href="#">Data warehouse</a>
            </li>
            <li role="menuitem">
              <a href="#">Business intelligence</a>
            </li>
            <li role="menuitem">
              <a href="#">Keystem software editing</a>
            </li>
            <li role="menuitem">
              <a href="#">Cybersecurity solutions</a>
            </li>

          </ul>
        </li>
        <li role="listitem">
          <a href="#">Contact</a>
        </li>
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
  );
};

export default Sidebar;
