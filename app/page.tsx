import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import { About } from "../src/containers";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <About />
            </div>
        </main>
    );
}
