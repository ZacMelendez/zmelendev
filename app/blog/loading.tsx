"use client";

import styles from "./Posts.module.scss";

export default function Loading() {
    return (
        <div className={styles.postsLayout}>
            <ul className={styles.postsList}>
                {[...new Array(10)].map((p, index) => (
                    <li key={index}>
                        <div
                            className="skeleton-card-text"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                            }}
                        >
                            <div className="skeleton skeleton-card-icon"></div>
                            <div style={{ width: "100%" }}>
                                <h2 className="skeleton skeleton-card-title"></h2>
                                <h4 className="skeleton skeleton-card-brand"></h4>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
