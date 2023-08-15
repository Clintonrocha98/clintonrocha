"use client";
import { useContext, useState } from "react";
import { LocalStorageContext } from "../hooks/useContext";
import AddressForm from "../components/Form/AddressForm";
import styles from "./styles.module.scss";
import PizzaOverView from "../components/PizzaOverview";

function sacola() {
    const [changeAddress, setChangeAddres] = useState(false);
    const { address, productsForPurchaseOnLocalStorage } =
        useContext(LocalStorageContext);

    if (changeAddress) {
        return <AddressForm />;
    }
    return (
        <section
            className={`${styles.container} animate__backInDown animate__animated animate__faster`}
        >
            <PizzaOverView orderData={productsForPurchaseOnLocalStorage} />
        </section>
    );
}
export default sacola;
