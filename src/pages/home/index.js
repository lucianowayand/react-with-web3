import { useEffect, useState } from 'react'
import Web3 from 'web3'

export default function Home(){
    const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")
    const [account, setAccount] = useState(null)

    async function callMetamask(){
        setAccount(await web3.eth.requestAccounts())
    }
    
    return(
        <>  
            <h1>Hey! Listen</h1>
            {account !== null ?<h1>{account}</h1> : <h1>Not connected</h1>}
            <button onClick={callMetamask}>Connect to metamask</button>
        </>
        
    )
}
