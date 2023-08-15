"use client";

import { LocalStorageContext } from "@/app/portopizzas/hooks/useContext";
import { useContext } from "react";

import styles from "./styles.module.scss";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

const BottomBar = () => {
    const { productsForPurchaseOnLocalStorage } =
        useContext(LocalStorageContext);

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
        <section className={`${styles.sacola} animate__backInUp animate__animated animate__faster`}>
            
            <Link href={"/portopizzas"}>
                <AiOutlineHome />
            </Link>

            <Link href={"/portopizzas/sacola"} className={styles.bag}>
                <BiShoppingBag />
                {productsForPurchaseOnLocalStorage.length > 0 && (
                    <span
                        className={`animate__shakeY animate__animated animate__infinite animate__delay-2s animate__slower`}
                    >
                        {productsForPurchaseOnLocalStorage.length}
                    </span>
                )}
            </Link>

        </section>
    );
};
export default BottomBar;
