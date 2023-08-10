import { z as zod } from "zod";

const nestedObjectSchema = zod.object({
    tamanho: zod.string(),
    sabores: zod.array(zod.string().nonempty("Selecione uma opção")),
    borda: zod.string().optional(),
});
export const zodPizzaFormSchema = zod.object({
    dynamicObjects: zod.record(nestedObjectSchema),
});
