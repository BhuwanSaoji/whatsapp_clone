import React, {useContext} from 'react'
import { Box, Dialog, Typography, List, ListItem, styled } from '@mui/material'
import { qrCodeImage } from "../constants/data"
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from "jwt-decode"
import { AccountContext } from './context/AccountProvider'
import { addUser } from './service/api'

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden"
}


const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`

const QrCode = styled('img')({
  height: 264,
  width: 264,
  margin: '50px 0 0 50px'
})

const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 300;
  font-family: interit;
  color: #41525d !important;
  margin-bottom: 25px;

`;

const StyledList = styled(List)`
  & > li {
    padding: 0px;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`

function LoginDialog() {
  const {setAccount} = useContext(AccountContext)

  const onLoginSuccess = async res => {
    let data =  jwtDecode(res.credential);
    setAccount(data)
    await addUser(data)

  }

  return (
    <Dialog
      open={true}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop = {true}

    >
      <Component>
        <Container>
          <Title>To use WhatsApp on your computer :</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings and select WhatsApp web</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>
          </StyledList>

        </Container>
        <Box style={{position: "relative"}}>
          <QrCode src={qrCodeImage} alt='qr code' />
          <Box style={{position: "absolute", top: "50%", transform: "translateX(37.5%)"}}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={() => {
                console.log('Login Failed');
              }} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog