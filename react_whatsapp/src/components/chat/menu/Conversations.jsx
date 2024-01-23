import React, {useContext, useEffect, useState} from 'react'
import { getUsers } from '../../service/api'
import { Box, Divider, styled } from '@mui/material'
import Conversation from './Conversation'
import { AccountContext } from '../../context/AccountProvider'


const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;

`

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`


const Conversations = ({text}) => {
    const [users, setUsers] = useState([])
    const {account, socket, setActiveUsers} = useContext(AccountContext);

    
    useEffect(() => {
      const fetchData = async () =>{
        let res = await getUsers();
        const fileteredData = res.filter(item=>item.name.toLowerCase().includes(text.toLowerCase())) 
        setUsers(fileteredData)
      } 
    
      fetchData()
    }, [text])


    useEffect(()=>{
      socket.current.emit('addUsers', account)
      socket.current.on('getUsers', users=>{
        setActiveUsers(users)
      })
    }, [account])
    


  return (
    <Component>
        {
            users.map(user=>
                user.sub!= account.sub ?
                  <>
                    <Conversation user={user} /> 
                    <StyledDivider />
                  </>
                 : ''
                
              )
        }
    </Component>
  )
}

export default Conversations