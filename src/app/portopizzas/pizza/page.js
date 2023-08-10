"use client";

import pizzas from "@/utils/data/pizzas.json";
import pizzaSizes from "@/utils/data/pizzaSizes.json";
import pizzaBords from "@/utils/data/pizzaBords.json";

import RenderInput from "../components/Form/RenderInput";

import { useState } from "react";

import generateUniqueId from "@/utils/generateUniqueId";

import OrderBar from "../components/OrderBar";

import styles from "./styles.module.scss";
import { IconArrowLeft, IconArrowRight } from "../components/SVG";

function Pizza() {
    const ID = generateUniqueId();

    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({
        id: ID,
        sabores: [],
        tamanho: { name: "", value: "" },
        borda: { name: "", value: "" },
        quantidade: 1,
    });

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "sabores") {
            setFormData({
                ...formData,
                sabores: value,
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
            <div className={styles.steps}>
                {currentStep > 0 && (
                    <button
                        type="button"
                        onClick={() =>
                            setCurrentStep((prevStep) => prevStep - 1)
                        }
                        title="Voltar"
                    >
                        <IconArrowLeft />
                    </button>
                )}

                {currentStep < 2 && (
                    <button
                        type="button"
                        onClick={handleNextStep}
                        title="próximo"
                        className={styles.next}
                    >
                        <IconArrowRight />
                    </button>
                )}
            </div>
            {currentStep === 2 && (
                <OrderBar formData={formData} setFormData={setFormData} />
            )}
        </>
    );
}

export default Pizza;
