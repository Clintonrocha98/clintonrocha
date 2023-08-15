"use client";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodAddresFormSchema, defaultValues } from "@/utils/form";
import { InputText } from "../InputText";
import { useContext } from "react";
import { LocalStorageContext } from "@/app/portopizzas/hooks/useContext";

function AddressForm() {
    const methods = useForm({
        mode: "all",
        resolver: zodResolver(zodAddresFormSchema),
        defaultValues,
    });
    const { saveAddress } = useContext(LocalStorageContext);

    const onSubmit = (data) => {
        saveAddress(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <InputText
                    type="text"
                    name="endereco"
                    label="Endereço"
                    placeholder="Endereço"
                />
                <InputText
                    type="text"
                    name="numero"
                    label="Numero"
                    placeholder="Numero"
                />
                <InputText
                    type="text"
                    name="bairro"
                    label="Bairro"
                    placeholder="Bairro"
                />
                <InputText
                    type="text"
                    name="complemento"
                    label="complemento"
                    placeholder="Complemento"
                />
                <button type="submit"> Finalizar Pedido</button>
            </form>
        </FormProvider>
    );
}

export default AddressForm;
