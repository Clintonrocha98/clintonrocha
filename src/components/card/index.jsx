import styles from "./styles.module.scss";

const Card = ({ name, src, link, description }) => {
    return (
        <article className={styles.card}>
            <a href={link} target="_blank">
                <div className={styles.containerImg}>
                    <img
                        src={src}
                        alt={`imagem mostrando um pouco do projeto ${name}`}
                    />
                </div>
                <div className={styles.containerText}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </article>
    );
};
export default Card;
