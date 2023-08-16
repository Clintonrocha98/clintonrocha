"use client";
import { useContext, useState } from "react";
import { LocalStorageContext } from "../hooks/useContext";
import AddressForm from "../components/Form/AddressForm";
import styles from "./styles.module.scss";
import PizzaOverView from "../components/PizzaOverview";
import { Title } from "../components/Title";

function sacola() {
    const { address, saveAddress, productsForPurchaseOnLocalStorage } =
        useContext(LocalStorageContext);

    const handleEditAddress = () => {
        saveAddress({});
    };
    function isObjectEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    const AddressInfo = ({ address }) => {
        return (
            <div className="address-info">
                <Title text={"Endereço"} />
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
                    <AddressInfo address={address} />
                </section>
            )}
        </>
    );
}
export default sacola;
