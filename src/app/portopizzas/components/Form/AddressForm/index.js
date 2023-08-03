"use client";
import { useForm } from "react-hook-form";
import { InputText } from "../InputTextText";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodAddresFormSchema, defaultValues } from "@/utils/form";
import ContainerForm from "../ContainerForm";

function AddressForm() {
    const methods = useForm({
        mode: "all",
        resolver: zodResolver(zodAddresFormSchema),
        defaultValues,
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <ContainerForm methods={methods} onSubmit={onSubmit}>
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
        </ContainerForm>
    );
}

export default AddressForm;
