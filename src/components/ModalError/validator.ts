import { z } from "zod";

export const schema = z.object({
    name: z
        .string()
        .min(3)
        .max(100, "O nome pode ter no máximo 100 caractéres"),
    email: z
        .string()
        .email("Deve ser um e-mail")
        .max(100, "O e-mail pode ter no máximo 100 caractéres"),
    phoneNumber: z.string().min(8).max(20, "Telefone informado é muito longo"),
    kontactImage: z
        .string()
        .max(255, "O link informado é muito longo")
        .optional()
        .nullable(),
});

export type TCreateKontactData = z.infer<typeof schema>;
