import Banner from "../Banner";
import BottomBar from "../BottomBar";
import styles from "./styles.module.scss";

function ContainerApp({ children }) {
    return (
        <section className={styles.PortoPizza}>
            <Banner />
            <div className={styles.contentProducts}>{children}</div>
            <BottomBar />
        </section>
    );
}
export default ContainerApp;
