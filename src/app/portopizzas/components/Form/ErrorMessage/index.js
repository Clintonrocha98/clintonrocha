import styles from "./styles.module.scss";

export const ErrorMessage = ({ message }) => {
    if (!message) {
        return <></>;
    }

    return (
        <span role="alert" className={styles.error}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 256 256"
            >
                <path
                    fill="currentColor"
                    d="M128 20a108 108 0 10108 108A108.12 108.12 0 00128 20zm0 192a84 84 0 1184-84 84.09 84.09 0 01-84 84zm-12-80V80a12 12 0 0124 0v52a12 12 0 01-24 0zm28 40a16 16 0 11-16-16 16 16 0 0116 16z"
                ></path>
            </svg>
            {message}
        </span>
    );
};
