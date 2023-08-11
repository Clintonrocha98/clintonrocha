"use client";

import drinks from "@/utils/data/drinks.json";

import RenderInput from "../components/Form/RenderInput";
import { useState } from "react";
import OrderBar from "../components/OrderBar";
import generateUniqueId from "@/utils/generateUniqueId";
import { Title } from "../components/Title";
import styles from "./styles.module.scss";

function Drink() {
    const ID = generateUniqueId();
    const [formData, setFormData] = useState({
        id: ID,
        bebida: { name: "", value: "" },
        quantidade: 1,
    });

    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: { ...value },
        });
    };

    return (
        <>
            <section className={styles.container}>
                <Title text={"Refrigerantes"} />
                <RenderInput
                    type={"radio"}
                    options={drinks}
                    fieldName={"bebida"}
                    onChange={handleInputChange}
                    selectedOption={formData.bebida}
                />
            </section>

            <OrderBar formData={formData} setFormData={setFormData} />
        </>
    );
}

export default Drink;
