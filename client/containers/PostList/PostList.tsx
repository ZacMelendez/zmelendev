import moment from "moment";
import Link from "next/link";
import React, { ReactNode, useContext } from "react";
import PostsContext from "../../context/PostsContext";
import { BlogEntry, PostCategory } from "../../../types";
import styles from "./PostList.module.scss";
import { WebDev, IoTDev, CloudDev } from "../../icons";

const getIcon = (category: PostCategory): ReactNode => {
    switch (category) {
        case "IOT_DEV":
            return <IoTDev />;
        case "WEB_DEV":
            return <WebDev />;
        case "CLOUD_DEV":
            return <CloudDev />;
    }
};

export default function PostList() {
    const { posts } = useContext(PostsContext);

    return (
        <div className={styles.container}>
            <ul className={styles.postlist}>
                {posts.length >= 1 &&
                    posts.map((item: BlogEntry) => (
                        <li key={item.id} className={styles.link}>
                            <Link href={`/posts/${item.url}`}>
                                <div className={styles.card}>
                                    {getIcon(item.type)}
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.date}>
                                        {moment(item.date).format(
                                            "MMMM DD, YYYY"
                                        )}
                                    </p>
                                    <p className={styles.description}>
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
