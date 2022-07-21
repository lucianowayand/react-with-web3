import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Navbar from '../../components/navbar'

const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")


export default function Home(){
    const [account, setAccount] = useState(null)
    const [occludedAccount, setOccludedAccount] = useState("")

    useEffect(() => {
        const fetchData = async () => {
                setAccount(await web3.eth.requestAccounts())
                setOccludedAccount(String(account).substring(0,5)+"..."+String(account).substring(38))
            }

        fetchData().catch(console.error)
    
    },[])
    


    return(
        <>  
            <Navbar occludedAccount={occludedAccount}/>
            
        </>
        
    )
}
