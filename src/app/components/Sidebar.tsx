"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Sidebar = () => {
  const [isContactsVisible, setIsContactsVisible] = useState(true);

  const [windowWidth, setWindowWidth] = useState(0); // Initialize with a default value

  useEffect(() => {
    // This code will only run on the client side
    setWindowWidth(window.innerWidth);

    // Optional: Add a resize event listener to update the width dynamically
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("windowWidth===>", windowWidth);
  return (
    <aside className="sidebar active" data-sidebar>
      <div className="sidebar-info">
        <a
          //   href="/assets/images/aakash_bnw.png"
          href="https://www.linkedin.com/in/muhammad-faizan-ali-6a82051a6/"
          target="_blank"
          rel="noopener noreferrer"
          title="Click me!"
        >
          <figure className="avatar-box">
            <Image
              src="/assets/images/my-avatar.png"
              alt="Aakash Rajbanshi"
              width={80}
              height={windowWidth <= 425 ? 80 : 150}
            />
            <span className="active-status" title="Available for work!"></span>
          </figure>
        </a>

        <div className="info-content">
          <h1 className="name" title="Aakash Rajbanshi">
            Muhammad Faizan
          </h1>
          <p className="title">React Native Developer</p>
        </div>

        {/* Toggle Contacts Button */}
        <button
          className="info_more-btn"
          onClick={() => setIsContactsVisible(!isContactsVisible)}
        >
          <span>Show Contacts</span>
          <FaChevronDown
            className={`chevron-icon ${isContactsVisible ? "rotate" : ""}`}
          />
        </button>
      </div>

      {/* Contacts Section */}
      <div
        className={`sidebar-info_more ${isContactsVisible ? "open" : "closed"}`}
      >
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:faizanit1192@gmail.com" className="contact-link">
                faizanit1192@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+97798163*****" className="contact-link">
                +92 302 7767 485
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Lahore, Pakistan</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/muhammad-faizan-ali-6a82051a6/"
              className="social-link"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/faizanali1192" className="social-link">
              <FaGithub />
            </a>
          </li>
          {/* <li className="social-item">
            <a href="https://g.dev" className="social-link">
              <FaGoogle />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com" className="social-link">
              <FaTwitter />
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
