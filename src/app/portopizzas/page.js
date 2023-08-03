"use client";
import Link from "next/link";
import { IconDrink, IconPizza } from "./components/SVG";
import styles from "./styles.module.scss";

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
        </section>
    );
};
export default Portopizzas;
