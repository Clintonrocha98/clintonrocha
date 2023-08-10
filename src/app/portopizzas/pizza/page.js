"use client";

import pizzas from "@/utils/data/pizzas.json";
import pizzaSizes from "@/utils/data/pizzaSizes.json";
import pizzaBords from "@/utils/data/pizzaBords.json";

import RenderInput from "../components/Form/RenderInput";
import { useState } from "react";

function Pizza() {
    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({
        sabores: [],
        tamanho: { name: "", value: "" },
        borda: { name: "", value: "" },
    });
    console.log(formData);

    const handleInputChange = (fieldName, value) => {
        
        if (fieldName === "sabores") {
            setFormData({
                ...formData,
                sabores: value ,
            });
        } else {
            setFormData({
                ...formData,
                [fieldName]: { ...value },
            });
        }
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    // const addPizza = () =>{

    // }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <RenderInput
                        type={"radio"}
                        options={pizzaSizes}
                        fieldName={"tamanho"}
                        onChange={handleInputChange}
                        selectedOption={formData.tamanho}
                    />
                );
            case 1:
                return (
                    <RenderInput
                        type={"checkbox"}
                        options={pizzas}
                        fieldName={"sabores"}
                        onChange={handleInputChange}
                        selectedOption={formData.sabores}
                    />
                );
            case 2:
                return (
                    <RenderInput
                        type={"radio"}
                        options={pizzaBords}
                        fieldName={"borda"}
                        onChange={handleInputChange}
                        selectedOption={formData.borda}
                    />
                );

            default:
                return null;
        }
    };
    return (
        <>
            {renderStep()}

            {currentStep > 0 && (
                <button
                    type="button"
                    onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
                >
                    Voltar
                </button>
            )}

            {currentStep < 2 && (
                <button type="button" onClick={handleNextStep}>
                    Próximo
                </button>
            )}

            {currentStep === 2 && <button>Adicionar Pizza</button>}
        </>
    );
}

export default Pizza;
