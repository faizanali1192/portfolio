"use client";
import { useState } from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
// import { Sidebar } from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");
  console.log(activeTab);
  const renderPage = () => {
    switch (activeTab) {
      case "About":
        return <AboutMe />;
      case "Resume":
        return <Resume />;
      case "Portfolio":
        return <Portfolio />;
      // case "Blog":
      //   return <Blog />;
      case "Contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <html lang="en">
      <body>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderPage()}
          </div>
        </main>
      </body>
    </html>
  );
}
