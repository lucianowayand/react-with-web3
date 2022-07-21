import { useEffect, useState } from 'react'
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")

export default function Home(){
    
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
                setAccount(await web3.eth.requestAccounts())
            }

        fetchData().catch(console.error)
    
    },[])
    
    return(
        <>  
            {account !== null ?<h1>{account}</h1> : <h1>Not connected</h1>}
            <h1>Hey! Listen</h1>

        </>
        
    )
}
