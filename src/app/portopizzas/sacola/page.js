"use client";
import { useContext } from "react";
import { LocalStorageContext } from "../hooks/useContext";
import AddressForm from "../components/Form/AddressForm";
import styles from "./styles.module.scss";
import PizzaOverView from "../components/PizzaOverview";

import AddressInfo from "./AddressInfo";

function sacola() {
    const { address, productsForPurchaseOnLocalStorage } =
        useContext(LocalStorageContext);

    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return (
        <>
            {isObjectEmpty(address) ? (
                <AddressForm />
            ) : (
                <section
                    className={`${styles.container} animate__backInDown animate__animated animate__faster`}
                >
                    <PizzaOverView
                        orderData={productsForPurchaseOnLocalStorage}
                    />
                    <AddressInfo />
                </section>
            )}
        </>
    );
}
export default sacola;
