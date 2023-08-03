import styles from "./styles.module.scss";

const ProductCard = ({ img, name, value, description }) => {
    return (
        <article className={styles.ProductCard}>
            {img && (
                <img
                    src={img}
                    title={`pizza de ${name}`}
                    alt={`image monstrando uma pizza de ${name}, contendo os ingredientes ${description}`}
                />
            )}
            <div>
                <h2 className={styles.title}>{name}</h2>
                {description && (
                    <p className={styles.description}>{description}</p>
                )}
            </div>
            <p className={styles.value}>${value}</p>
        </article>
    );
};

export default ProductCard;
