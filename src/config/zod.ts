import z from "zod";

export const dataSchema = z.object({
    firstName: z.string().min(3,{message: "First Name Should Be More Than 3 Characters ❌!"}),
    lastName: z.string().min(3,{message: "Last Name Should Be More Than 3 Characters ❌!"}),
    email: z.string().email({message: "Invalid Email ❌!"})
})