import { z as zod } from "zod";

export const zodPizzaFormSchema = zod.object({
    tamanho: zod.string().nonempty("Selecione uma opção"),
    sabores: zod.array(zod.string().nonempty("Selecione uma opção")),
    borda: zod.string().optional(),
});
