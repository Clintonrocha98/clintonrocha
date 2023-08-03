import styles from "./styles.module.scss";

function ContainerApp({ children }) {
    return (
        <section className={styles.PortoPizza}>
            <div className={styles.content}>
                <div className={styles.contentProducts}>{children}</div>
            </div>
        </section>
    );
}
export default ContainerApp;
