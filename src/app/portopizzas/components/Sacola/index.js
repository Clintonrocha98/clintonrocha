"use client";

import { LocalStorageContext } from "@/hooks/useContext";
import { useContext } from "react";

import styles from "./styles.module.scss";
import { IconBag } from "../SVG";
import Link from "next/link";

const Sacola = () => {
    const { productsForPurchaseOnLocalStorage } =
        useContext(LocalStorageContext);

    if (productsForPurchaseOnLocalStorage.length === 0) {
        return null;
    }

    function calculateTotal(order) {
        let total = 0;

        for (const item of order) {
            if (item.hasOwnProperty("bebida")) {
                const value = parseFloat(item.bebida.value);
                const quantity = parseInt(item.quantidade);
                total += value * quantity;
            } else if (item.hasOwnProperty("sabores")) {
                const pizzaValue = parseFloat(item.tamanho.value);
                const quantity = parseInt(item.quantidade);

                let flavorsTotal = 0;
                for (const flavor of item.sabores) {
                    flavorsTotal += parseFloat(flavor.value);
                }

                const borderValue = parseFloat(item.borda.value);

                total += (pizzaValue + flavorsTotal + borderValue) * quantity;
            }
        }

        return total;
    }

    return (
        <section className={styles.sacola}>
            <div className={styles.bag}>
                <IconBag />
                <span>{productsForPurchaseOnLocalStorage.length}</span>
            </div>
            <Link href={"/portopizzas/sacola"}>Ver sacola</Link>
            <p>
                R${calculateTotal(productsForPurchaseOnLocalStorage).toFixed(2)}
            </p>
        </section>
    );
};
export default Sacola;
