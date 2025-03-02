"use client"; // Required for client-side interactivity
import React, { useState } from "react";
import { FaEye, FaChevronDown } from "react-icons/fa"; // Replace ion-icons with react-icons
import Image from "next/image";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all"); // State for filtering
  const [isSelectOpen, setIsSelectOpen] = useState(false); // State for mobile select dropdown

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: "Signal Edge (Android)",
      category: "applications",
      image: "/assets/projects/signal-edge.png",
      link: "https://play.google.com/store/apps/details?id=com.signal.edge&pcampaignid=web_share",
    },
    {
      id: 2,
      title: "Signal Edge (IOS)",
      category: "applications",
      image: "/assets/projects/signal-edge.png",
      link: "https://apps.apple.com/us/app/signal-edge/id6470830060",
    },
    {
      id: 3,
      title: "Signal Set (Android)",
      category: "applications",
      image: "/assets/projects/signal-set-logo.png",
      link: "https://play.google.com/store/apps/details?id=com.signal.SET&pcampaignid=web_share",
    },
    {
      id: 4,
      title: "Signal Set (IOS)",
      category: "applications",
      image: "/assets/projects/signal-set-logo.png",
      link: "https://apps.apple.com/pk/app/signal-set/id6470826089",
    },
    {
      id: 5,
      title: "Viwell (Android)",
      category: "applications",
      image: "/assets/projects/viwell-logo.png",
      link: "https://play.google.com/store/apps/details?id=com.viwell.app&pcampaignid=web_share",
    },
    {
      id: 6,
      title: "Viwell (IOS)",
      category: "applications",
      image: "/assets/projects/viwell-logo.png",
      link: "https://apps.apple.com/ae/app/viwell/id1669218312",
    },

    {
      id: 7,
      title: "Viwell Survey (Web Portal)",
      category: "web development",
      image: "/assets/projects/viwell-survey.png",
      link: "https://www.viwell.com/lets-talk",
    },
    {
      id: 8,
      title: "Aqua Royal Management System (SAAS)",
      category: "web development",
      image: "/assets/projects/aqua-royal.png",
      link: "https://aquaroyal.com.pk/",
    },
  ];

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <div className="projects">
        {/* Filter buttons for desktop */}
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "applications" ? "active" : ""}
              onClick={() => setSelectedCategory("applications")}
            >
              Applications
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "web development" ? "active" : ""}
              onClick={() => setSelectedCategory("web development")}
            >
              Web development
            </button>
          </li>
          {/* <li className="filter-item">
            <button
              className={selectedCategory === "ui/ux" ? "active" : ""}
              onClick={() => setSelectedCategory("ui/ux")}
            >
              UI/UX
            </button>
          </li> */}
        </ul>

        {/* Filter select for mobile */}
        <div className="filter-select-box">
          <button
            className="filter-select"
            onClick={() => setIsSelectOpen(!isSelectOpen)}
          >
            <div className="select-value">
              {selectedCategory === "all"
                ? "Select category"
                : selectedCategory}
            </div>
            <div className="select-icon">
              <FaChevronDown />
            </div>
          </button>

          {isSelectOpen && (
            <ul className="select-list">
              <li className="select-item">
                <button onClick={() => setSelectedCategory("all")}>All</button>
              </li>
              <li className="select-item">
                <button onClick={() => setSelectedCategory("applications")}>
                  Applications
                </button>
              </li>
              <li className="select-item">
                <button onClick={() => setSelectedCategory("web development")}>
                  Web development
                </button>
              </li>
              <li className="select-item">
                <button onClick={() => setSelectedCategory("ui/ux")}>
                  UI/UX
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Project list */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item"
              data-filter-item
              data-category={project.category}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaEye />
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    loading="lazy"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Portfolio;
