// ai code is 
import { ZodType, z } from "zod"
export type UserRegistraionProps = {
  type: string
  fullname: string
  email: string
  confirmEmail?: string
  password: string
  confirmPassword?: string
  otp: string
}

export const UserRegistraionSchema: ZodType<UserRegistraionProps> = z
  .object({
    type: z.string().min(1),
    fullname: z
      .string()
      .min(4, { message: 'Your full name must be at least 4 characters long' }),

    email: z.string().email({ message: 'Incorrect email format' }),

    confirmEmail: z.string().email().optional(),

    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(64, { message: 'Password cannot be longer than 64 characters' })
      .refine(
        (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
        'Password should contain only alphabets and numbers'
      ),

    confirmPassword: z.string().optional(),

    otp: z
      .string()
      .min(6, { message: 'You must enter a 6-digit code' }),
  })
  .refine(
    (data) =>
      !data.confirmPassword || data.password === data.confirmPassword,
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    }
  )
  .refine(
    (data) =>
      !data.confirmEmail || data.email === data.confirmEmail,
    {
      message: 'Emails do not match',
      path: ['confirmEmail'],
    }
  )

// ai code ends

// my code 
// import { ZodType, z } from "zod"

// export type UserRegistraionProps = {
//     type: string
//     fullname: string
//     email: string
//     password: string
//     confirmEmail: string
//     confirmPassword: string
//     otp: string
// }

// export const UserRegistraionSchema: ZodType<UserRegistraionProps> = z
// .object({
//         type: z.string().min(1),
//         fullname: z
//         .string()
//         .min(4, { message: 'Your full name must be atleast 4 characters long' }),
//         email: z.string().email({ message: 'incorrect email format' }),
//         confirmEmail: z.string().email(),
//         password: z
//             .string()
//             .min(8, { message: 'your password must be atleast 8 characters long' })
//             .max(64, {
//                 message: 'your password cannot be longer than 64 characters'
//             })
//             .refine(
//                 (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
//                 'password should contain only alphabets and numbers'
//             ),
//         confirmPassword: z.string(),
//         otp:z.string().min(6,{message:'your must enter a 6digit code'})
//     })
//     .refine((schema)=>schema.password===schema.confirmPassword,{
//         message:'password do not macha',
//         path:['confirmPassword'],
//     })
//     .refine((schema)=>schema.email===schema.confirmEmail,{
//         message:'email is not macha',
//         path:['confirmEmail'],
//     })

//  my code part
    export type UserLoginProps={
        email:string
        password:string
    }
    export type ChangePasswordProps={
        password:string
        confirmPassword:string
    }


    export const UserLoginSchema:ZodType<UserLoginProps>=z.object({
        email: z.string().email({ message: 'You did not enter a valid email' }),
        password: z
            .string()
            .min(8, { message: 'your password must be atleast 8 chareacter long' })
            .max(64, {
                message: 'your password cannot be longer than 64 characters',
            }),
    })

    export const ChangePasswordSchema:ZodType<ChangePasswordProps>=z 
    .object({
        password:z
        .string()
        .min(8, { message: 'Your password must be atleast 8 characters long' })
        .max(64, {
            message: 'your password cannot be longer than 64 characters long',
            })
            .refine(
                (value) => /^[a-zA-Z0-9_.-]*$/.test(value ?? ''),
                'password should contain only alphabets and numbers'
            ),
        confirmPassword: z.string(),
    })
    .refine((schema)=>schema.password===schema.confirmPassword,{
        message:'password do not match',
        path:['confirmPassword'],
    })
