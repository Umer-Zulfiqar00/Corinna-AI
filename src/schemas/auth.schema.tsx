import { z,ZodType } from "zod"

export type UserRegistraionProps = {
    type: string
    fullname: string
    email: string
    password: string
    confirmEmail: string
    confirmPassword: string
    otp: string
}

export const UserRegistraionSchema: ZodType<UserRegistraionProps> = z
    .object({
        type: z.string().min(1),
        fullname: z.
            string()
            .min(4, { message: 'Your full name must be atleast 4 characters long' }),
        email: z.string().email({ message: 'incorrect email format' }),
        confirmEmail: z.string().email(),
        password: z
            .string()
            .min(8, { message: 'your password must be atleast 8 chareacter long' })
            .max(64, {
                message: 'your password cannot be longer than 64 characters'
            })
            .refine(
                (value) => /^[a-zA-z0-9_.-]*$/.test(value ?? ''),
                'password should contain only alphabets and numbers'
            ),
        confirmPassword: z.string(),
        otp:z.string().min(6,{message:'your must enter a 6digit code'}),
    })
    .refine((schema)=>schema.password===schema.confirmPassword,{
        message:'password do not macha',
        path:['confirm password'],
    })
    .refine((schema)=>schema.email===schema.confirmEmail,{
        message:'email is not macha',
        path:['confirm Email'],
    })

    export type UserLoginProps={
        email:string
        password:string
    }

    export const UserLoginSchema:ZodType<UserLoginProps>=z.object({
         email: z.string().email({ message: 'You did not enter a valid email' }),
        confirmEmail: z.string().email(),
        password: z
            .string()
            .min(8, { message: 'your password must be atleast 8 chareacter long' })
            .max(64, {
                message: 'your password cannot be longer than 64 characters'
            }),
    })
