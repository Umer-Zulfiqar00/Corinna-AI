import { useToast } from "@/components/ui/use-toast"
import { UserLoginProps, UserLoginSchema } from "@/schemas/auth.schema"
import { useSignIn } from "@clerk/nextjs"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from 'react-hook-form'


export type UserRegistraionProps = {
  onOTP: string;
};

export const useSignInForm = () => {
    const { isLoaded, setActive, signIn } = useSignIn()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    const { toast } = useToast()
    const methods = useForm<UserLoginProps>({
        resolver: zodResolver(UserLoginSchema),
        mode: 'onChange',
    })
    // const onHandleSubmit = methods.handleSubmit(
    //     async (values: UserLoginProps) => {
    //           console.log('SUBMIT FIRED', values)

    //         if (!isLoaded) return

    //         try {
    //             setLoading(true)
    //             const authenticated = await signIn.create({
    //                 identifier: values.email,
    //                 password: values.password,
    //             })

    //             if (authenticated.status === 'complete') {
    //                 await setActive({ session: authenticated.createdSessionId })
    //                 toast({
    //                     title: 'Success',
    //                     description: 'Welcome back!'
    //                 })
    //                 router.push('/dashboard')
    //             }
    //         } catch (error: any) {
    //             setLoading(false)
    //             if (error.errors[0].code === 'form_password_incorrect')
    //                 toast({
    //                     title: 'Error',
    //                     description: 'email/password is incorrect try again'
    //                 })
    //         }
    //     }
    // )
    
    // ai code
    const onHandleSubmit = methods.handleSubmit(
  async (values) => {
    console.log('HANDLE SUBMIT CALLED', values)
  },
  (errors) => {
    console.log('RHF BLOCKED SUBMIT', errors)
  }
)

    
    
    return {
        methods,
        onHandleSubmit,
        loading,
    }
}