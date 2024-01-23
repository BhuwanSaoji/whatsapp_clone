import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import { Menu } from './menu/Menu'
import { EmptyChat } from './chat/EmptyChat'
import Chatbox from './chat/Chatbox'
import { AccountContext } from '../context/AccountProvider'


const dialogStyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
  margin: "20px",
  borderRadius: "0px"
}

const Component = styled(Box)`
  display: flex;
  height: 100%;
`

const LeftComponent = styled(Box)`
  min-width : 450px;
`

const RightComponent = styled(Box)`
  width : 75%;
  min-width: 300px;
  border-left : 1px solid rgba(0,0,0, 0.14)
 
`

const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
    // maxWidth= {'md'}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>

        <RightComponent>
          {!person ? <EmptyChat /> :
            <Chatbox person= {person} />}
        </RightComponent>
      </Component>
    </Dialog>

  )
}

export default ChatDialog