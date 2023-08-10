"use client";
import { createContext, useEffect, useState } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
    const [favoriteProductsOnLocalStorage, setFavoriteProductsOnLocalStorage] = useState([]);
    const [productsForPurchaseOnLocalStorage, setProductsForPurchaseOnLocalStorage] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
        setFavoriteProductsOnLocalStorage(storedProducts);

        const storedBuys = JSON.parse(localStorage.getItem("buy")) || [];
        setProductsForPurchaseOnLocalStorage(storedBuys);
    }, []);

    const saveProductToLocalStorage = (product) => {
        const updatedProducts = [...favoriteProductsOnLocalStorage];
        const existingProductIndex = updatedProducts.findIndex(
            (savedProduct) => savedProduct === product
        );

        if (existingProductIndex > -1) {
            updatedProducts.splice(existingProductIndex, 1);
        } else {
            updatedProducts.push(product);
        }

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setFavoriteProductsOnLocalStorage(updatedProducts);
    };

    const savePurchaseToLocalStorage = (buy) => {
        const updatedBuys = [...productsForPurchaseOnLocalStorage];
        const existingBuyIndex = updatedBuys.findIndex(
            (savedBuy) => savedBuy === buy
        );

        if (existingBuyIndex > -1) {
            updatedBuys.splice(existingBuyIndex, 1);
        } else {
            updatedBuys.push(buy);
        }

        localStorage.setItem("buy", JSON.stringify(updatedBuys));
        setProductsForPurchaseOnLocalStorage(updatedBuys);
    };

    return (
        <LocalStorageContext.Provider
            value={{ favoriteProductsOnLocalStorage, saveProductToLocalStorage, productsForPurchaseOnLocalStorage, savePurchaseToLocalStorage }}
        >
            {children}
        </LocalStorageContext.Provider>
    );
};