"use client";
import React from "react";

interface BlogPost {
  title: string;
  date: string;
  image: string;
  altText: string;
  description: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Flutter vs. Flock: Cross-Platform Evaluation",
    date: "2024-11-18",
    image: "./assets/blogs/blog-2.png",
    altText: "Flutter vs. Flock: Cross-Platform Evaluation",
    description:
      "Explore the differences between Flutter and Flock, a new fork focused on faster development and community-driven cross-platform app creation.",
    link: "https://aakash58.hashnode.dev/flutter-vs-flock-exploring-the-new-fork-in-cross-platform-development",
  },
  {
    title: "Flutter's Impact on Future Cross-Platform Apps",
    date: "2024-11-13",
    image: "./assets/blogs/blog-1.png",
    altText: "Flutter's Impact on Future Cross-Platform Apps",
    description:
      "Explore Flutter's growing influence on cross-platform app development in 2024 and its future potential across mobile, web, and IoT devices.",
    link: "https://aakash58.hashnode.dev/the-future-of-cross-platform-apps-flutters-role-in-2024-and-beyond",
  },
];

const Blog: React.FC = () => {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <li className="blog-post-item" key={index}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <figure className="blog-banner-box">
                  <img src={post.image} alt={post.altText} loading="lazy" />
                </figure>
                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">Blog</p>
                    <span className="dot"></span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toDateString()}
                    </time>
                  </div>
                  <h3 className="h3 blog-item-title">{post.title}</h3>
                  <p
                    className="blog-text"
                    style={{
                      overflow: "hidden",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.description}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
