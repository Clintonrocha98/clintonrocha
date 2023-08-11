import styles from "./styles.module.scss";
export const Title = ({ text, subText }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{text}</h1>
            {subText && <h2 className={styles.subText}>{subText}</h2>}
        </header>
    );
};
