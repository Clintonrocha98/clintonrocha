import DropMenu from "../DroopMenu";
import { Title } from "../Title";
import styles from "./styles.module.scss";

const PizzaOverView = ({ orderData }) => {
    const calculateTotal = (includeProp) => {
        let total = 0;

        orderData.forEach((item) => {
            if (item.bebida) {
                total += parseFloat(item.bebida.value);
            } else if (item.sabores) {
                total += parseFloat(item.tamanho.value);
                item.sabores.forEach((sabor) => {
                    total += parseFloat(sabor.value);
                });
                total += parseFloat(item.borda.value);
            }
        });

        if (includeProp) {
            total += 10;
        }

        return total.toFixed(2).replace(".", ",");
    };
    return (
        <div className={styles.PizzaOverView}>
            <Title text={"Pedidos"} className={styles.title}/>
            {orderData.map((item, index) => (
                <div key={index}>
                    {item.bebida && (
                        <div className={styles.order}>
                            <p className={styles.ajust}>
                                {item.quantidade}X {item.bebida.name}
                                <span className={styles.value}>
                                    R${parseFloat(item.bebida.value).toFixed(2)}
                                </span>
                            </p>
                            <DropMenu product={item} />
                        </div>
                    )}
                    {item.sabores && (
                        <div className={styles.orderPizza}>
                            <p className={styles.ajust}>
                                {item.quantidade}X {item.tamanho.name}{" "}
                                <span className={styles.value}>
                                    R$
                                    {parseFloat(item.tamanho.value).toFixed(2)}
                                </span>
                            </p>

                            <p className={styles.ajust}>
                                Borda: {item.borda.name}{" "}
                                <span className={styles.value}>
                                    R${parseFloat(item.borda.value).toFixed(2)}
                                </span>
                            </p>
                            <ul>
                                <p>Sabores:</p>
                                {item.sabores.map((sabor, saborIndex) => (
                                    <li
                                        key={saborIndex}
                                        className={styles.ajust}
                                    >
                                        {sabor.name}
                                        <span className={styles.value}>
                                            R$
                                            {parseFloat(sabor.value).toFixed(2)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <DropMenu product={item} />
                        </div>
                    )}
                </div>
            ))}
            <div className={styles.total}>
                <p className={styles.ajust}>
                    Subtotal{" "}
                    <span className={styles.value}>R${calculateTotal()}</span>
                </p>
                <p className={styles.ajust}>
                    Taxa de entrega{" "}
                    <span className={styles.value}>R$10,00</span>
                </p>
                <p className={`${styles.ajust} ${styles.ValorTotal}`}>
                    Total:{" "}
                    <span className={styles.value}>
                        R${calculateTotal(true)}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default PizzaOverView;
