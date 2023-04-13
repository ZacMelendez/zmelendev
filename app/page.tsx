import styles from "./page.module.scss";
import { About } from "../client/containers";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <About />
            </div>
        </main>
    );
}
