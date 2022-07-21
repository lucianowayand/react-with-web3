import { useState } from "react";
import Web3 from "web3"

const web3 = new Web3(Web3.givenProvider || "https://localhost:8545")

export default function Home(props){
    const [amount, setAmount] = useState(0)
    const [address, setAddress] = useState('')
    
    function callTransaction(){
        if(amount>2){
            web3.eth.sendTransaction({
                from: String(props.account),
                to: (address || '0x3FF709e9716d7398A251bf840160b16238EB2E70'),
                value: web3.utils.toWei((String(amount)||1),'ether'),
                gasPrice: '0x09184e72a000',
                gas: '42000',
              }).then((txHash) => console.log(txHash))
              .catch(() => console.error);
        }else{
            console.log("Amount must be greater than 2")
        }
        
    }
    
    return(
        <div className="paper">  
            <h1>Executando transações pelo navegador:</h1>
            <form style={{display:'flex', flexDirection:'column', }}>
                <label style={{padding:'1rem'}}>
                    Valor a ser enviado na moeda principal da sua rede: 
                    <input 
                        type={"number"}
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value, 10))}
                    />
                </label>
                <label style={{padding:'1rem'}}>
                    Remetente: 
                    <input 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={callTransaction}>Clique me!</button>
        </div>
        
    )
}
