"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import ZachOverflow from "../../icons/ZachOverflow";
import React, { useContext, useEffect, useState } from "react";
import UIThemeContext from "../../context/UIThemeContext";

export default function Header() {
    const { theme, setTheme, menuOpen, setMenuOpen } =
        useContext(UIThemeContext);
    const [screenSize, setScreenSize] = useState<number>(1200);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenSize(window.innerWidth);
        }
    }, []);

    const updateMedia = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    const handleClick = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className={styles.div}>
            <div className={styles.title}>
                <ZachOverflow
                    primary={theme === "dark" ? "#e5e5e3" : "#454545"}
                />
                <p>zach</p>
                <p>overflow</p>
            </div>
            <ul className={styles.nav}>
                <li>
                    <Link className="nav-link" href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/posts/1">
                        Posts
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/">
                        Create
                    </Link>
                </li>
            </ul>
        </div>
    );
}
