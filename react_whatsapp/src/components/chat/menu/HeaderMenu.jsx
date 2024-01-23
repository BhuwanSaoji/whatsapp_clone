import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'


const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding: 15px 60px 5px 24px;
    color: #4a4a4a;
`
const HeaderMenu = ({setOpenDrawer}) => {

    const [open, setOpen] = useState(null);

    const handleClose= ()=>{
        setOpen(false);
    }

    const handleClick= (e)=>{
        setOpen(e.currentTarget)
    }
    return (
        <>
            <MoreVert onClick={handleClick} />

            <Menu
                anchorOrigin={{
                    vertical : "bottom",
                    horizontal: "center" 
                }}
                keepMounted
                anchorEl={open}
                getContentAnchorE1 = {null}
                open={open}
                onClose={handleClose}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true)}}>Profile</MenuOption>
                <MenuOption onClick={handleClose}>My account</MenuOption>
                <MenuOption onClick={handleClose}>Logout</MenuOption>

            </Menu>
        </>
    )
}

export default HeaderMenu