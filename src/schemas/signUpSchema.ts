import {z} from "zod";


export const usernameValidation = z
    .string()
    .min(3, "Username must be atleast 3 characters long")
    .max(20, "Username must be atmost 20 characters long")
    .regex(/^[A-Za-z0-9]+$/, "Username must only contain letters and numbers")


export const signUpSchema = z.object({
    username: usernameValidation,
    password: z
    .string()
    .min(6, "Password must be atleast 6 characters long")
    .max(20, "Password must be atmost 20 characters long"),
    email: z
    .string()
    //.email({ message: 'Invalid email address'}),
    .email('Invalid email address')

});

