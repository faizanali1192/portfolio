"use client";
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a <b>Senior Software Engineer</b> specializing in React Native
          and React.js, with <b>4+ years</b> of experience building
          high-performance mobile and web applications. I excel in
          cross-platform development, performance optimization, and{" "}
          <b>scalable frontend architectures</b>, integrating features like live
          GPS tracking, offline syncing (WatermelonDB), and CI/CD automation.
        </p>
        <p>
          My expertise includes React Native, React.js, Next.js, GraphQL, Redux,
          and Node.js, with hands-on experience in Kotlin for native
          integrations. I have led mentorship programs, optimized app
          performance by 40%+, and developed solutions that improved user
          engagement by 25%. Passionate about Agile development and cutting-edge
          technologies. Let’s connect and build something great together!
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {[
            {
              icon: "icon-app.svg",
              title: "Mobile Apps",
              text: "Professional development of applications for Android and iOS.",
            },
            {
              icon: "icon-dev.svg",
              title: "Web development",
              text: "High-quality development of sites at the professional level.",
            },
            {
              icon: "icon-design.svg",
              title: "UI/UX Design",
              text: "The most modern and high-quality design made at a professional level.",
            },
            {
              icon: "icon-backend.svg",
              title: "Backend Development",
              text: "High-performance backend services designed for scalability and seamless user experience.",
            },
          ].map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img
                  src={`./assets/images/${service.icon}`}
                  alt={service.title}
                  width="40"
                />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Skills</h3>
        <ul className="clients-list has-scrollbar">
          {[
            { name: "reacticonnew", link: "https://dart.dev/" },
            { name: "tsicon", link: "https://flutter.dev/" },
            { name: "Xcode", link: "https://developer.apple.com/xcode/" },
            {
              name: "AndroidStudio",
              link: "https://developer.android.com/studio",
            },
            { name: "Firebase", link: "https://firebase.google.com/" },
            { name: "Postman", link: "https://www.postman.com/" },
            { name: "Figma", link: "https://www.figma.com/" },
          ].map((skill, index) => (
            <li key={index} className="clients-item">
              <a href={skill.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={`./assets/skills/${skill.name}.svg`}
                  alt={skill.name}
                  style={{ filter: "none" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default AboutMe;
