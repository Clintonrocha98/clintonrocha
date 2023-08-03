import { z as zod } from "zod";

export const zodDrinkFormSchema = zod.object({
    bebida: zod.string().optional(),
});
