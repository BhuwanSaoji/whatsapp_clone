import { Box, InputBase, styled } from '@mui/material'
import React from 'react'
import { Search as SearchIcon } from '@mui/icons-material'

const Component = styled(Box)`
    background: #fff;
    height:45 px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 10px;
`
const Icon = styled(Box)`
    position: absolute;
    heigth: 100%;
    padding: 6px 8px;
    color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding : 16px;
    padding-left : 65px;
    height: 15px;
    font-size: 14px;
`

const Search = ({setText}) => {

    const handleChange =(e)=>{
        setText(e.target.value)
    }

  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon fontSize='small' />
            </Icon>
            <InputField
                onChange={handleChange}
                placeholder='Search or start new chat'
            />
        </Wrapper>
    </Component>
  )
}

export default Search