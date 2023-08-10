import styles from "./styles.module.scss";

function ContainerApp({ children }) {
    return (
        <section className={styles.PortoPizza}>
            <div className={styles.contentProducts}>{children}</div>
        </section>
    );
}
export default ContainerApp;
