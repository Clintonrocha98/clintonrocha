import styles from "./styles.module.scss";
export const Title = ({ text, subText, className }) => {
    return (
        <header className={`${styles.header} ${className}`}>
            <h1 className={styles.title}>{text}</h1>
            {subText && <h2 className={styles.subText}>{subText}</h2>}
        </header>
    );
};
