import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// collect all the files from the blog data dir
// iterate through them and display them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useeffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.main1}>
        <main className={styles.popular}>
          <h2>Popular Courses</h2>
          {blogs.map((blogItem) => {
            return (
              <div className={styles.blogItemh3} key={blogItem.title}>
                <Link href="/blogposts/learn-javascript">
                  <h2>How to learn {blogItem.title} in 2022</h2>
                </Link>
                <p>{blogItem.content.substr(0, 150)}</p>
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Blog;
