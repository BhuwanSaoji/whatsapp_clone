import {createContext, useState, useRef, useEffect } from "react";
import {io} from "socket.io-client"
export const AccountContext = createContext(null);

export const AccountProvider = ({children})=>{
    const [account, setAccount] = useState();
    const [person, setPerson] = useState();
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false)


    const socket = useRef()

    useEffect(()=>{
        socket.current= io('ws://localhost:9000')
    }, [])

    return(
        <AccountContext.Provider value= {{
            setAccount, account, person, setPerson, socket ,setActiveUsers, activeUsers, setNewMessageFlag, newMessageFlag
        }} >
            {children}
        </AccountContext.Provider>
    )
}