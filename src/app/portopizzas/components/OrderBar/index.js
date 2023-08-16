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

        if (pedido.sabores) {
            pedido.sabores.forEach((sabor) => {
                total += Number(sabor.value);
            });
            total += Number(pedido.tamanho.value);

            total += Number(pedido.borda.value);
        } else {
            total += Number(pedido.bebida.value);
        }

        return total * pedido.quantidade;
    }
    function completedApplication(pedido) {
        if (pedido.sabores) {
            const tamanhoPreenchido =
                pedido.tamanho && pedido.tamanho.value !== "";
            const saboresPreenchidos = pedido.sabores.length > 0;
            const bordaPreenchida = pedido.borda && pedido.borda.value !== "";

            return tamanhoPreenchido && saboresPreenchidos && bordaPreenchida;
        }
        return pedido.bebida.name !== "";
    }
    return (
        <div
            className={`${styles.orderBar} animate__backInLeft animate__animated animate__faster`}
        >
            <div className={styles.sizeButton} title="Quantidade">
                <button
                    onClick={diminuirQuantidade}
                    className={styles.leftButton}
                    aria-label="deminuir"
                >
                    <IconSubtraction />
                </button>
                <span>{formData.quantidade}</span>
                <button
                    onClick={aumentarQuantidade}
                    className={styles.rightButton}
                    aria-label="aumentar"
                >
                    <IconAddition />
                </button>
            </div>
            <BuyButton
                product={formData}
                className={styles.adcionarButton}
                disabled={!completedApplication(formData)}
            >
                Adicionar R${calcularTotal(formData)}
            </BuyButton>
        </div>
    );
};
export default OrderBar;
