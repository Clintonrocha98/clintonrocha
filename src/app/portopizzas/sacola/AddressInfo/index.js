import { useContext } from "react";
import { Title } from "../../components/Title";
import { LocalStorageContext } from "../../hooks/useContext";
import styles from "./styles.module.scss";

const AddressInfo = () => {
    const { address, saveAddress } = useContext(LocalStorageContext);
    const handleEditAddress = () => {
        saveAddress({});
    };
    return (
        <div className={styles.addressInfo}>
            <Title text={"Endereço"} className={styles.title}/>
            <p>
                <strong>Endereço:</strong> {address.endereco}
            </p>
            <p>
                <strong>Número:</strong> {address.numero}
            </p>
            <p>
                <strong>Bairro:</strong> {address.bairro}
            </p>
            {address.complemento && (
                <p>
                    <strong>Complemento:</strong> {address.complemento}
                </p>
            )}
            <button onClick={handleEditAddress}>
                Alterar endereço de entrega
            </button>
        </div>
    );
};
export default AddressInfo;
