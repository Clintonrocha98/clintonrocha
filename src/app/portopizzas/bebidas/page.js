"use client";

import drinks from "@/utils/data/drinks.json";

import RenderInput from "../components/Form/RenderInput";
import { useState } from "react";

function Drink() {
    const [formData, setFormData] = useState({
        bebida: { name: "", value: "" },
    });
    console.log(formData);

    const handleInputChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: { ...value },
        });
    };

    return (
        <>
            <RenderInput
                type={"radio"}
                options={drinks}
                fieldName={"bebida"}
                onChange={handleInputChange}
                selectedOption={formData.bebida}
            />
            <button>Adicionar Bebida</button>
        </>
    );
}

export default Drink;
