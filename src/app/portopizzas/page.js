"use client";
import Link from "next/link";
import { IconDrink, IconPizza } from "./components/SVG";
import styles from "./styles.module.scss";
import Sacola from "./components/Sacola";

const Portopizzas = () => {
    return (
        <section className={styles.PortoPizza}>
            <Link href={"/portopizzas/pizza"} title="Pizza">
                <IconPizza />
                <p>Pizza</p>
            </Link>

            <Link href={"/portopizzas/bebidas"} title="Bebidas">
                <IconDrink />
                <p>Bebidas</p>
            </Link>
            <Sacola />
        </section>
    );
};
export default Portopizzas;
