"use client";

import styles from "./About.module.scss";
import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About Me</h1>
            <Image
                loader={({ src, width }) => {
                    return `${src}?w=${width}`;
                }}
                src={"https://s3.amazonaws.com/zachoverflow/images/about.png"}
                alt={"About photo"}
                width={250}
                height={250}
                className={styles.image}
            />
            <div className={styles.paragraphs}>
                <p>
                    Hi, my name is Zach Melendez. I am a Mechanical Engineering
                    Graduate from the University of Connecticut with experience
                    in Front & Back-End Web Development.
                </p>
                <p>
                    I currently work as an IoT Development Engineer, where I
                    work in conjunction with our developer team to manage a
                    Microsoft Azure Cloud Data Lake & IoT Hub which communicate
                    with a JavaScript based customer application.
                </p>
                <p>
                    I am experienced in languages such as Python, JavaScript,
                    HTML & CSS, and have utilized NodeJS, React, SASS, and
                    Next.JS for web development projects. I also have experience
                    with Docker, Azure, and the Linux CLI from my work with IoT
                    Applications.
                </p>
                <p>
                    I have developed this blog using NextJS, Typescript and AWS
                    for the PostsDatabases. I would like to document my
                    learnings on my path to becoming a Cloud Developer, and know
                    that my learnings will be able to help others along the way.
                </p>
            </div>
        </div>
    );
}
