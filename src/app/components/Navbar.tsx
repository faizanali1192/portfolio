"use client";
import React, { useState } from "react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (x: string) => void;
}
const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {[
          "About",
          "Resume",
          "Portfolio",
          // "Blog",
          "Contact",
        ].map((tab) => (
          <li className="navbar-item" key={tab}>
            <button
              className={`navbar-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
