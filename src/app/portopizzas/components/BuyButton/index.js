"use client";

import { LocalStorageContext } from "@/hooks/useContext";
import { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";

const BuyButton = ({ children, product, className, disabled }) => {
    const [isProductSaved, setIsProductSaved] = useState(false);

    const { productsForPurchaseOnLocalStorage, savePurchaseToLocalStorage } =
        useContext(LocalStorageContext);

    useEffect(() => {
        const isSaved = productsForPurchaseOnLocalStorage.some(
            (savedProduct) => savedProduct.id === product.id
        );

        setIsProductSaved(isSaved);
    }, [productsForPurchaseOnLocalStorage, product]);

    const handleSave = () => {
        if (typeof window === "undefined") {
            return;
        }

        savePurchaseToLocalStorage(product);
        setIsProductSaved(!isProductSaved);

        if (!isProductSaved) {
            toast("Adicionado ao carrinho!.", {
                icon: "🍕",
            });
        } else {
            toast("Removido do carrinho!", {
                icon: "🍕",
            });
        }
    };
    return (
        <button
            onClick={handleSave}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
export default BuyButton;
