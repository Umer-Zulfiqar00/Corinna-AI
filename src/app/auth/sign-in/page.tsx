import SignInFormProvider from '@/components/forms/sign-in/form-provider'
import LoginForm from '@/components/forms/sign-in/login-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
    return (
        <div className='flex-1 py-36 md:px-16 w-full'>
            <div className='flex flex-col h-full gap-3'>
                <SignInFormProvider>
                    <div className=' flex flex-col gap-3'>
                        <LoginForm />
                        <div className='w-full flex flex-col gap-3 items-center'>
                            <Button
                                type='submit'
                                className='w-full'
                            >
                                Submit
                            </Button>
                            <p>
                                Dont't have an account? {' '}
                                <Link
                                    href='/auth/sign-up'
                                    className='font-bold'
                                >
                                    Create one
                                </Link>
                            </p>
                        </div>
                    </div>
                </SignInFormProvider>
            </div >
        </div >
    )
}

export default SignInPage

















// import ButtonHandler from "@/components/forms/sign-up/button-hanldlers";
// import SignUpFormProvider from "@/components/forms/sign-up/form-provider";
// import RegistrationFormStep from "@/components/forms/sign-up/registration-step";

// import React from 'react'

// type Props={}

// const SignUp=(props: Props)=>{
//     return(
//         <div className="flex-1 py-36 md:px-16 w-full">
//             <div className="flex flex-col h-full fap-3">
//                 <SignUpFormProvider>
//                     <div className="flex flex-col gap-3">
//                         <RegistrationFormStep/>
//                         <ButtonHandler/>
//                     </div>
//                 </SignUpFormProvider>
//             </div>
//         </div>
//     )
// }