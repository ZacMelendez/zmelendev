"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import ZachOverflow from "../../client/icons/ZachOverflow";
import React, { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UIThemeContext from "../../client/context/UIThemeContext";
import { Switch } from "@nextui-org/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header() {
    const { data: session } = useSession();

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
                <p style={{ fontWeight: "600" }}>overflow</p>
            </div>
            <ul className={styles.nav}>
                <li>
                    <Link className="nav-link" href="/">
                        About
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/blog">
                        Blog
                    </Link>
                </li>
                {session?.user?.email === "zacmelendez@gmail.com" && (
                    <li>
                        <Link className="nav-link" href="/create">
                            Create
                        </Link>
                    </li>
                )}
                <li>
                    <Switch
                        color="warning"
                        checked={theme == "light"}
                        onChange={handleClick}
                        iconOff={<MdLightMode />}
                        iconOn={<MdDarkMode />}
                    />
                </li>
            </ul>
        </div>
    );
}
