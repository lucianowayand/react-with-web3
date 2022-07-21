import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import Web3 from 'web3'
import Home from "./pages/home";
import NotFound from "./pages/not-found";

const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")

export default function App() {
    const [account, setAccount] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
                setAccount(await web3.eth.requestAccounts())

            }

        fetchData().catch(console.error)
    
    },[])

    function Navbar(){
      return(
        <div style={{ backgroundColor: '#3a3a3a', color:'white', display:'flex', justifyContent:'space-between', padding:'0.5rem 2rem' }}>
            <h1><a href="/" style={{color:'white', textDecoration:'none'}}>Test app</a></h1>
            <h1>{String(account).substring(0,5)+"..."+String(account).substring(38)}</h1>
        </div>
      )
    }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home account={account} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      
    </BrowserRouter>
      
   
      
  );
}