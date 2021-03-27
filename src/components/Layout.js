import React from "react";
import styles from "./Layout.module.css";
import logo from "../images/icon.png";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <img width={30} height={30} src={logo} alt="logo" />
      </div>
      <div className={styles.placeholder} />
      {children}
      <div className={styles.footer}></div>
    </>
  );
}
