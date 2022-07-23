import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <h1>MET NFT</h1>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>

        <Link href="/about">
          <li>About Us</li>
        </Link>
        <Link href="/blog">
          <li>Contact Us</li>
        </Link>
      </ul>
      <button className={styles.btn}>Connect Wallet</button>
    </nav>
  );
};

export default Navbar;
