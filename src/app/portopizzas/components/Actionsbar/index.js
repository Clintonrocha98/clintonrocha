"use client";
import Link from "next/link";
import { IconCart, IconHome } from "../SVG";
import styles from "./styles.module.scss";

const ActionBar = ({ page }) => {
    return (
        <nav className={styles.ActionBar}>
            <div className={styles.content}>
                <Link
                    href="/portopizzas"
                    className={page === "/portopizzas" ? styles.active : ""}
                >
                    <IconHome />
                    {page === "/portopizzas" && "Home"}
                </Link>
                <Link
                    href="/portopizzas/carrinho"
                    className={
                        page === "/portopizzas/carrinho" ? styles.active : ""
                    }
                >
                    <IconCart />
                    {page === "/portopizzas/carrinho" && "Carrinho"}
                </Link>
            </div>
        </nav>
    );
};
export default ActionBar;
