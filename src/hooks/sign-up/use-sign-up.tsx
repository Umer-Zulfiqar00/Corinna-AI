'use client'
import { useToast } from "@/components/ui/use-toast"
// import { useToast } from "../use-toast"
import {
    UserRegistraionProps,
    UserRegistraionSchema
} from "@/schemas/auth.schema"
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUp, useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { onCompleteUserRegistration } from "@/actions/auth"

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()
    const methods = useForm<UserRegistraionProps>({
        resolver: zodResolver(UserRegistraionSchema),
        defaultValues: {
            type: 'owner',
        },
        mode: 'onChange',
    })

    const onGenerateOTP = async (
        email: string,
        password: string,
        onNext: React.Dispatch<React.SetStateAction<number>>
     ) => {
        if (!isLoaded) return

        try {
            await signUp.create({
                emailAddress: email,
                password: password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            onNext((prev) => prev + 1)
            alert('running')
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.errors[0].longMessage,
            })
        }
    }


    const onHandleSubmit = methods.handleSubmit(
        async (values: UserRegistraionProps) => {
            if (!isLoaded) return
                 try {
                setLoading(true)
                const completeSignup = await signUp.attemptEmailAddressVerification({
                    code: values.otp,
                })

                if (completeSignup.status !== 'complete') {
                    return { message: 'something went wrong' }
                }

                if (completeSignup.status == 'complete') {
                    if (!signUp.createdUserId) return

                    const registered = await onCompleteUserRegistration(
                        values.fullname,
                        signUp.createdUserId,
                        values.type
                    )

                    if (registered?.status == 200 && registered.user) {
                        await setActive({
                            session: completeSignup.createdSessionId,
                        })

                        setLoading(true)
                        router.push('/dashboard')
                    }

                    if (registered?.status == 400) {
                        toast({
                            title: 'Error',
                            description: 'Something Went Wrong'
                        })
                    }
                }
            } catch (error: any) {
                toast({
                    title: 'Error',
                    description: error.error[0].longMessage,
                })
            }
        }
    )
    return {
        methods,
        onHandleSubmit,
        onGenerateOTP,
        loading,
    }
}