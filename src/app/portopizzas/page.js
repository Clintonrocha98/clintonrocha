"use client";
import Link from "next/link";
import { IconDrink, IconPizza } from "./components/SVG";
import styles from "./styles.module.scss";


const Portopizzas = () => {
    return (
        <section className={styles.PortoPizza}>
            
            <div className={styles.containerLinks}>
                <Link
                    href={"/portopizzas/pizza"}
                    title="Pizza"
                    className="animate__backInLeft animate__animated animate__faster"
                >
                    <IconPizza />
                    <p>Pizzas</p>
                </Link>

                <Link
                    href={"/portopizzas/bebidas"}
                    title="Bebidas"
                    className="animate__backInRight animate__animated animate__faster"
                >
                    <IconDrink />
                    <p>Bebidas</p>
                </Link>
            </div>
        </section>
    );
};
export default Portopizzas;
