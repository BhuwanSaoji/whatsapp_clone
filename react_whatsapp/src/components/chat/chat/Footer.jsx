import { AttachFile, EmojiEmotionsOutlined, Mic } from '@mui/icons-material'
import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../service/api';

const Container = styled(Box)`
    display: flex;
    height: 55px;
    width: 100%;
    background: #ededed;
    align-items: center;
    padding: 0px 15px;
    &>* {
        margin: 5px;
        color: #919191;

    }
`;

const Search = styled(Box)`
    background: #ffffff;
    border-radius: 10px;
    width: calc(94% - 100px);
`

const InputField = styled(InputBase)`
    height: 20px;
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
`

const Footer = ({sentText, value, setValue, file, setFile, setImage}) => {

    useEffect(()=>{
        const getImage= async()=>{
            if(file){
                const formdata = new FormData()
                formdata.append("name", file.name);
                formdata.append("file", file);

                let res = await uploadFile(formdata);
                setImage(res.data)
            }
        }

        getImage()
    }, [file])

    const onFileChange=(e)=>{
        // console.log(e.target.files)
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }

    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor='fileInput'>
                <ClipIcon />
            </label>
            <input 
                onChange={onFileChange} 
                type="file" 
                style={{display: "none"}} 
                id="fileInput" 
            />

            <Search>
                <InputField
                    value={value}
                    onKeyPress={(e)=>sentText(e)} 
                    onChange={(e)=>setValue(e.target.value)} 
                    placeholder='Type a message' />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer