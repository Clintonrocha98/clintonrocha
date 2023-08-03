"use client";

import pizzas from "@/utils/data/pizzas.json";
import pizzaSizes from "@/utils/data/pizzaSizes.json";
import pizzaBords from "@/utils/data/pizzaBords.json";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { zodPizzaFormSchema } from "@/utils/form";

import { useState } from "react";
import ContainerForm from "../components/Form/ContainerForm";
import InputCheckboxRadio from "../components/Form/InputCheckboxRadio";



function Pizza() {
    const [currentStep, setCurrentStep] = useState(0);

    const methods = useForm({
        mode: "all",
        resolver: zodResolver(zodPizzaFormSchema),
        defaultValues: {
            tamanho: "",
            sabores: [],
            borda: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <InputCheckboxRadio
                        type={"radio"}
                        options={pizzaSizes}
                        name={"tamanho"}
                    />
                );
            case 1:
                return (
                    <InputCheckboxRadio
                        type={"checkbox"}
                        options={pizzas}
                        name={"sabores"}
                    />
                );
            case 2:
                return (
                    <InputCheckboxRadio
                        type={"radio"}
                        options={pizzaBords}
                        name={"borda"}
                    />
                );

            default:
                return null;
        }
    };
    return (
        <ContainerForm methods={methods} onSubmit={onSubmit}>
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

            {currentStep === 2 && (
                <button type="submit">Finalizar Pedido</button>
            )}
        </ContainerForm>
    );
}

export default Pizza;
