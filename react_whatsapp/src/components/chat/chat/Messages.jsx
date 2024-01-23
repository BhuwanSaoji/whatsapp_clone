import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useState, useRef } from 'react'
import Footer from './Footer'
import { AccountContext } from "../../context/AccountProvider"
import { getMessage, newMessage } from '../../service/api'
import Message from './Message'

const Wrapper = styled(Box)`
      background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})
      // background-size: 
  `

const Component = styled(Box)`
      height: 80vh;
      overflow-y: scroll;
  `
const Container = styled(Box)`
  padding: 1px 80px; 
`
const Messages = ({ conversation }) => {
  const { account, person, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext)
  const [value, setValue] = useState([])
  const [messages, setMessages] = useState([])
  const [file, setFile] = useState()
  const [image, setImage] = useState("")
  const [incomingMessage, setIncomingMessage] = useState(null)
  const scrollRef = useRef()


  useEffect(()=>{
    socket.current.on("getMessage", data=>{
      setIncomingMessage({
        ...data, 
        createdAt: Date.now()
      })
    })
  }, [])


  useEffect(()=>{
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
    setMessages(prev => [...prev, incomingMessage])
  }, [incomingMessage, conversation])

  useEffect(() => {
    
    scrollRef.current?.scrollIntoView({transition: "smooth"})
    
  }, [messages])
  

  const sentText = async (e) => {
    const code = e.keyCode || e.which;
    // Enter key code is 13
    if (code === 13) {
    let message 
      if(!file){
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation["_id"],
          type: 'text',
          text: value,
        }
      }else{
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation["_id"],
          type: 'file',
          text: image,
        }
      }

      socket.current.emit("sendMessage", message);
      
      await newMessage(message);
      setNewMessageFlag(!newMessageFlag)
      setValue("")
      setFile("")
      setImage("")

    }
  }

  useEffect(() => {
    const fetchMessages = async () => {
      if (conversation._id) {
        let data = await getMessage(conversation._id);
        setMessages(data)
      }
    }

    fetchMessages()

  }, [person.sub, conversation["_id"], newMessageFlag])

  return (
    <Wrapper>
      <Component>
        {
          messages && messages.length > 0 && messages.map(message => {
            return (
              <Container ref = {scrollRef}>
                <Message message={message} />
              </Container>
            )
          })
        }
      </Component>
      <Footer setValue={setValue} value={value} sentText={sentText} setFile={setFile} file={file} setImage={setImage} />

    </Wrapper>
  )
}

export default Messages