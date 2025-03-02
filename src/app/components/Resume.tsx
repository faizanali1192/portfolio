"use client";
import { FaBook, FaFileDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Government College and University (GCU)
            </h4>
            <p className="timeline-text">
              Bachelor of Science in Information Technology B.S(IT)
            </p>
            <span>2017 — 2021</span>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Kips College</h4>
            <p className="timeline-text">ICS</p>
            <span>2015 — 2017</span>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Senior Software Engineer - (React Native)
            </h4>
            <p className="timeline-text">Tkxel</p>
            <span>Aug, 2023 — Present - 1.5 years</span>
            <p className="timeline-text">
              <i>Lahore, Pakistan (Hybrid)</i>
            </p>
            <ul className="timeline-text">
              <li>Implemented micro-frontend architecture using submodules</li>
              <li>
                Automate the process of Integration GraphQL APIs using
                TypeScript, RTK Query, and Codegen.
              </li>
              <li>
                Integrated the Thryve SDK to retrieve data from various wearable
                devices such as Apple Watch, Fitbit, and Oura Ring.
              </li>
              <li>
                Developed an Admin Panel and mobile applications from scratch
                using React.js, Next.js, and React Native.
              </li>
              <li>
                Designed complex graphs for visualizing data within mobile
                applications.
              </li>
              <li>Utilized Strapi headless CMS for content management.</li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Engineer - (React & React Native)
            </h4>
            <p className="timeline-text">Viwell</p>
            <span>Dec, 2021 — Aug 2023 - 2 years, </span>
            <p className="timeline-text">
              <i>Dubai - (Remote)</i>
            </p>
            <ul className="timeline-text">
              <li>Implemented micro-frontend architecture using submodules.</li>
              <li>
                Automated CI/CD pipelines for build and deployment using App
                Center.
              </li>
              <li>Utilized App Center CodePush for direct updates.</li>
              <li>Integrated offline syncing using Watermelon DB.</li>
              <li>
                Specialized in map functionalities including in-app navigation,
                out-of-app navigation, live tracking, site & officers
                management.
              </li>
              <li>
                Mentored and guided junior team members and conduct tech camps
                to share knowledge with colleagues within the company.
              </li>
              <li>Worked with Native Modules and write unit test cases.</li>
              <li>
                Performed code review and deployed the app in Playstore and
                Appstore.
              </li>
            </ul>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>
            <p className="timeline-text">QNAR Dev</p>
            <span>July, 2021 — Dec 2021 - 5 months, </span>
            <p className="timeline-text">
              <i>Faisalabad, Pakistan - (On-Site)</i>
            </p>
            <ul className="timeline-text">
              <li>
                Convert Figma designs into responsive and interactive websites.{" "}
              </li>
              <li>
                Collaborate with designers and back-end developers to integrate
                user-facing elements with server-side logic.
              </li>
              <li>
                Conduct website testing and debugging to ensure functionality
                across various platforms and devices.
              </li>
              <li>
                Develop and maintain documentation for software and codebases to
                support ongoing development and maintenance.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <button
        className="form-btn"
        type="button"
        onClick={() => window.open("/assets/cv/Faizan-CV.pdf")}
      >
        <FaFileDownload />
        <span>Download CV</span>
      </button>
    </article>
  );
};

export default Resume;
