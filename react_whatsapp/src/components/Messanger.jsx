import React, { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LoginDialog from './LoginDialog';
import ChatDialog from './chat/ChatDialog';

import { AccountContext } from './context/AccountProvider';

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00A884;
  box-shadow: none;
`

const LoginHeader = styled(AppBar)`
  height: 200px;
  background-color: #00bfa5;
  box-shadow: none;
`

const Component = styled(Box)`
  height: 100vh;
  background: #DCDCDC;
`

// https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png


function Messanger() {
  const { account } = useContext(AccountContext)

  return (
    <Component>
      {
        account ? <>
          <Header>
            <Toolbar />
          </Header>
          <ChatDialog />
        </>
          :
          <>
            <LoginHeader>
              <Toolbar />
            </LoginHeader>
            <LoginDialog />
          </>
      }

    </Component>
  )
}

export default Messanger