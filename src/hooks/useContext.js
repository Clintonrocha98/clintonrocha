"use client";
import { createContext, useEffect, useState } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
    const [
        productsForPurchaseOnLocalStorage,
        setProductsForPurchaseOnLocalStorage,
    ] = useState([]);

    useEffect(() => {
        const storedBuys = JSON.parse(localStorage.getItem("pizzaria")) || [];
        setProductsForPurchaseOnLocalStorage(storedBuys);
    }, []);

    const savePurchaseToLocalStorage = (buy) => {
        const updatedBuys = [...productsForPurchaseOnLocalStorage];
        const existingBuyIndex = updatedBuys.findIndex(
            (savedBuy) => savedBuy.id === buy.id
        );

        if (existingBuyIndex > -1) {
            updatedBuys.splice(existingBuyIndex, 1);
        } else {
            updatedBuys.push(buy);
        }

        localStorage.setItem("pizzaria", JSON.stringify(updatedBuys));
        setProductsForPurchaseOnLocalStorage(updatedBuys);
    };

    return (
        <LocalStorageContext.Provider
            value={{
                productsForPurchaseOnLocalStorage,
                savePurchaseToLocalStorage,
            }}
        >
            {children}
        </LocalStorageContext.Provider>
    );
};
