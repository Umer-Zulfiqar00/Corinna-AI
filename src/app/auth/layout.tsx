import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()
  if (user) redirect('/') // redirect logged-in users

  return (
    <div className='h-screen flex w-full justify-center'>
      <div className='w-[600px] ld:w-full flex-col 
      items-start p-6'>
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes='100vw'
          style={{
            width: '20%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
      <div className='hidden lg:flex flex-l w-full max-h-full max-w-4000px
        overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3'>
        <h2 className="text-gravel md:text-4xl font-bold">
        Hi I am your AI powered sales assistant Corinna</h2>
        <p className="text-iridium md:text-sm mb-10">
        corinna is capable of capturing lead informataion without a form ...{''}
        <br/>
        something never done before
        </p>
        <Image 
        src="/images/app-ui.png"
        alt='app image'
        loading='lazy'
        sizes='30'
        className='absolute shrink-0 !w-[1600px] top-48'
        width={0}
        height={0}
        />
      </div> 
    </div>

      // <div className='hidden lg:flex flex-col w-full max-w-screen-lg
      // overflow-y-auto bg-cream pt-10 gap-3'>

      //   <div className="px-6 lg:px-24"> {/* Padding inside */}
      //     <h2 className="text-gravel md:text-4xl font-bold">
      //       Hi I am your AI powered sales assistant Corinna
      //     </h2>

      //     <p className="text-iridium md:text-sm mb-10">
      //       corinna is capable of capturing lead information without a form ...
      //       <br />
      //       something never done before
      //     </p>
      //   </div>

      //   <div className="relative w-full h-[500px]">
      //     <Image
      //       src="/images/app-ui.png"
      //       alt="app image"
      //       fill
      //       className="object-contain"
      //       loading="lazy"
      //     />
      //   </div>

      //     </div>

  )
}
export default Layout
