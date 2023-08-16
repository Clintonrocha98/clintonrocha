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
import { Title } from "../components/Title";

function Pizza() {
    const ID = generateUniqueId();

    const [currentStep, setCurrentStep] = useState(0);

    const [formData, setFormData] = useState({
        id: ID,
        sabores: [],
        tamanho: { name: "", value: "" },
        borda: { name: "", value: "" },
        quantidade: 1,
        observacao: "",
    });

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "sabores") {
            setFormData({
                ...formData,
                sabores: value,
            });
        } else if (fieldName === "observacao") {
            setFormData({
                ...formData,
                observacao: value,
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

    function animate() {
        switch (currentStep) {
            case 0:
                return "animate__backInLeft animate__animated animate__faster";
            case 1:
                return "animate__backInRight animate__animated animate__faster";
            case 2:
                return "animate__backInLeft animate__animated animate__faster";
            default:
                return null;
        }
    }

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <section className={`${styles.container} ${animate()}`}>
                        <Title
                            text={"Pizzas"}
                            subText={"Escolha a opção que te agrada"}
                        />
                        <RenderInput
                            type={"radio"}
                            options={pizzaSizes}
                            fieldName={"tamanho"}
                            onChange={handleInputChange}
                            selectedOption={formData.tamanho}
                        />
                    </section>
                );
            case 1:
                return (
                    <section className={`${styles.container} ${animate()}`}>
                        <Title
                            text={"Sabores"}
                            subText={"Monte sua pizza com os melhores sabores"}
                        />
                        <RenderInput
                            type={"checkbox"}
                            options={pizzas}
                            fieldName={"sabores"}
                            onChange={handleInputChange}
                            selectedOption={formData.sabores}
                        />
                    </section>
                );
            case 2:
                return (
                    <section className={`${styles.container} ${animate()}`}>
                        <Title
                            text={"Bordas"}
                            subText={"Por ultimo, mas não menos importante"}
                        />
                        <RenderInput
                            type={"radio"}
                            options={pizzaBords}
                            fieldName={"borda"}
                            onChange={handleInputChange}
                            selectedOption={formData.borda}
                        />
                        <div>
                        <Title
                            text={"Observação"}
                            subText={"Faça sua observação sobre o pedido (opcional)"}
                        />
                            <input
                                className={styles.inputText}
                                type="text"
                                value={formData.observacao}
                                onChange={(e) =>
                                    handleInputChange(
                                        "observacao",
                                        e.target.value
                                    )
                                }
                                placeholder="Exemplo: Retire as cebolas"
                            />
                        </div>
                    </section>
                );

            default:
                return null;
        }
    };
    return (
        <>
            {renderStep()}
            <div className={`${styles.steps} ${animate()}`}>
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
