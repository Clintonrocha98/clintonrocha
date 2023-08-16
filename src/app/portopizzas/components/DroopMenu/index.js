"use client";
import styles from "./styles.module.scss";
import { useContext, useState, useEffect, useRef } from "react";
import { LocalStorageContext } from "../../hooks/useContext";
import { AiOutlineMore } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const DropMenu = ({ product }) => {
    const { savePurchaseToLocalStorage } = useContext(LocalStorageContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleMenuButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleDeleteClick = () => {
        savePurchaseToLocalStorage(product);
    };

    return (
        <div className={styles.dropMenu} ref={menuRef}>
            <button
                className={styles.menuButton}
                onClick={handleMenuButtonClick}
                title="opções"
            >
                <AiOutlineMore />
            </button>

            <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
                <div className={styles.pedido} onClick={handleDeleteClick}>
                    Remover <BsTrash />
                </div>
            </div>
        </div>
    );
};

export default DropMenu;
