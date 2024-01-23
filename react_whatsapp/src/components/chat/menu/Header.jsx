import React, { useContext, useState } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box, styled } from '@mui/material';
import { Chat as MessageIcon, More, MoreVert } from "@mui/icons-material"
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

const Component = styled(Box)`
    height : 44px;
    background : #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;

`

// to shift right do margin-left auto
const Wrapper = styled(Box)`
    margin-left : auto;  
    & > * {
        margin-left : 2px;
        padding : 8px;
        color : black;
    };

    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 6px;
    }
`

const Image = styled('img')({
    borderRadius: "50%",
    height: 40,
    width: 40,
})

const Header = () => {
    const { account } = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const toggelDrawer = ()=>{
        setOpenDrawer(true);
    }
    
    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={toggelDrawer} />
                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu setOpenDrawer={setOpenDrawer} />
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen= {setOpenDrawer} />
        </>
    )
}

export default Header