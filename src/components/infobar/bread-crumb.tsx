'use client'
import React from 'react'

type Props = {}

const BreadCrumb = (props: Props) => {
        // WIP:  set up Use side bar hook for real time chat and chat bot stuff
        // WIP: setup the description and the switch
  return (
    <><div className='flex flex-col'>
        <div className='flex gap-5 items-center'>
            <h2 className='text-3xl font-bold capitalize'>Title</h2>
        </div>
        <p  className='text-gray-500 text-sm'>
        Modify domain settings , change chatbot options, enter sales questions and train you bot to do what you want it to.'
        </p>
    </div>
    </>
  )
}

export default BreadCrumb








// {page == 'settings'
//             ? 'Manage your account settings, prefrences and integrations'
//             :page == 'dashboard'
//             ? 'A detailed overview of your metrics, usege,customers and more'
//             :page == 'appoinment'
//             ?'View and edit all your appoinments'
//             :page == 'email-marketing'
//             ? 'Send bulk emails to your customers'
//             : page =='integragtion'
//             ?'Connect third-party applications into Corinna AI'
//             :}