import BuyButton from "../BuyButton";
import { IconAddition, IconSubtraction } from "../SVG";
import styles from "./style.module.scss";

const OrderBar = ({ setFormData, formData }) => {
    const aumentarQuantidade = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            quantidade: prevFormData.quantidade + 1,
        }));
    };

    const diminuirQuantidade = () => {
        if (formData.quantidade > 0) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                quantidade: prevFormData.quantidade - 1,
            }));
        }
    };
    function calcularTotal(pedido) {
        let total = 0;

        pedido.sabores.forEach((sabor) => {
            total += Number(sabor.value);
        });

        total += Number(pedido.tamanho.value);

        total += Number(pedido.borda.value);

        return total * pedido.quantidade;
    }
    return (
        <div className={styles.orderBar}>
            <div className={styles.sizeButton}>
                <button
                    onClick={diminuirQuantidade}
                    className={styles.leftButton}
                >
                    <IconSubtraction />
                </button>
                <span>{formData.quantidade}</span>
                <button
                    onClick={aumentarQuantidade}
                    className={styles.rightButton}
                >
                    <IconAddition />
                </button>
            </div>
            <BuyButton
                product={formData}
                className={styles.adcionarButton}
                disabled={calcularTotal(formData) === 0}
            >
                Adicionar R$ {calcularTotal(formData)}
            </BuyButton>
        </div>
    );
};
export default OrderBar;
