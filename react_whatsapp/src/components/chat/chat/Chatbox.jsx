import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../context/AccountProvider'
import { getConversation } from '../../service/api'

const Chatbox = ({person}) => {
  const {account} = useContext(AccountContext)
  const [conversation, setConversation] = useState({})

  useEffect(()=>{
    const getConversationDetails = async () =>{
      let data = await getConversation({senderId: account.sub, receiverId: person.sub});
      setConversation(data)
    }
    getConversationDetails()
  }, [person.sub])

  return (
    <Box>
        <ChatHeader person={person} />
        <Messages conversation={conversation} />
    </Box>
  )
}

export default Chatbox