import { z as zod } from "zod";

const message = "Campo de preenchimento obrigatório";

export const zodAddresFormSchema = zod.object({
    endereco: zod.string().min(1, message),
    numero: zod.string().min(1, message),
    bairro: zod.string().min(1, message),
    complemento: zod.string().min(1, message),
});


