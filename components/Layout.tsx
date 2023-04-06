import Nav from "./Nav";
import Header from "./Header";
import React from "react";
import styles from "../styles/Layout.module.css";
import { ScriptProps } from "next/script";

const Layout = ({ children }: ScriptProps) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
