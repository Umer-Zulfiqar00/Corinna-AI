'use client'
import useSideBar from '@/context/use-sidebar'
import React from 'react'
import { Loader } from '../loader'
import { Switch } from '../ui/switch'

type Props = {}

const BreadCrumb = (props: Props) => {
        // WIP:  set up Use side bar hook for real time chat and chat bot stuff
        // WIP: setup the description and the switch
        const {
          chatRoom,
          expand,
          loading,
          onActivateRealtime,
          onExpand,
          page,
          onSignOut,
          realtime,
        }= useSideBar()
  return (
    <><div className='flex flex-col'>
        <div className='flex gap-5 items-center'>
            <h2 className='text-3xl font-bold capitalize'>{page}</h2>
            {page === 'conversation' && chatRoom && (
              <Loader
              loading={loading}
              className='p-0 inline'
              >
                <Switch
                defaultChecked={realtime}
                onClick={(e)=>onActivateRealtime(e)}
                className='data-[state=checked]:bg-orange data-[state=unchecked]:bg-peach'
                />
              </Loader>
            )}
        </div>
        <p  className='text-gray-500 text-sm'>
          {page == 'settings'
            ? 'Manage your account settings, prefrences and integrations'
            :page == 'dashboard'
            ? 'A detailed overview of your metrics, usege,customers and more'
            :page == 'appoinment'
            ?'View and edit all your appoinments'
            :page == 'email-marketing'
            ? 'Send bulk emails to your customers'
            : page =='integragtion'
            ?'Connect third-party applications into Corinna AI'
            :'Modify domain settings , change chatbot options, enter sales questions and train you bot to do what you want it to.'}
        </p>
    </div>
    </>
  )
}

export default BreadCrumb








