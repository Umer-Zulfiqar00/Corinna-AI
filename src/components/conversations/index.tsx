'use client'
import { useConversation } from '@/hooks/conversation/use-conversation'
import React from 'react'
import TabsMenu from '../tabs'
import { TABS_MENU } from '@/constants/menu'
import { TabsContent } from '../ui/tabs'
import ConversationSearch from './search'

type Props = {
    domains?:
    | {
        name: string
        id: string
        icon: string
    }[]
    | undefined
}

const ConversationMenu = ({ domains }: Props) => {
    const { register, chatRooms, loading, onGetActiveChatMessages } = useConversation()

    return (
        <div className='py-5 px-0'>
            <TabsMenu triggers={TABS_MENU}>
                <TabsContent value='unread'>
                    <ConversationSearch 
                    domains={domains} 
                    register={register} 
                    />
                </TabsContent>
            </TabsMenu>

        </div>
    )
}

export default ConversationMenu