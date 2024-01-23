import { ArrowBack } from '@mui/icons-material'
import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react'
import Profile from './Profile';


const drawerStyle = {
    left: 20,
    top: 17,
    height: "95%",
    width: "30%",
    boxShadow: "none",

}

const Header = styled(Box)`
    display: flex;
    background: #008069;
    height: 107px;
    color: #ffffff;
    & > svg, & > p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`;

const Component = styled(Box)`
    background: #f0f2f5;
    height: 85%;
`

const InfoDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            open={open}
            onClose={setOpen}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: "10000" }}
        >
            <Header>
                <ArrowBack onClick={()=>setOpen(false)} />
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer