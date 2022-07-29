import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
import { useEffect, useState } from "react"

export const BalanceDisplay = () => {
    const [balance, setBalance] = useState();
    const [solAmount, setSolAmount] = useState(0);
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [recipientAddress, setRecipientAddress] = useState();
    const [balanceOverflowError, setBalanceOverflowError] = useState(false)



    useEffect(() => {
        const getBalance = async () => {
            const tempBalance = await connection.getBalance(publicKey)
            setBalance(tempBalance/web3.LAMPORTS_PER_SOL)
            console.log(tempBalance)
            
        }
        getBalance()
    }, [publicKey])


    const transferSol = () => {
        checkSolAmount()
        if (!balanceOverflowError) {
            const transaction = new web3.Transaction()
            const sendSolInstruction = web3.SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipientAddress,
                lamports: web3.LAMPORTS_PER_SOL * 0.1
            })
    
            transaction.add(sendSolInstruction);
    
            sendTransaction(transaction, connection);
    
        }
     
    }

    const checkSolAmount = () => {
        if (solAmount) {
            let amount = solAmount.trim()
            amount = parseFloat(amount)
            console.log(amount)
            if (amount > balance) {
                setBalanceOverflowError(true)  
                console.log("balance overflow")
            } else{
                setBalanceOverflowError(false)
            }
        } else {
            setSolAmount(0)
        }
       
        
    }
    return (
        <div>
            {publicKey ? 
                <div>
                    <p>{balance}</p>
                    <div>
                        <input type="text" placeholder="Recipient address" onChange={(e) => { setRecipientAddress(e.target.value) }} value={recipientAddress}></input>
                        <input type="test" placeholder="Amount" onChange={(e) => {setSolAmount(e.target.value)}} value={solAmount}></input>
                        <button onClick={() => { transferSol() }}>send transaction</button>
                        {
                            balanceOverflowError && <p>Buy more sol</p>
                        }
                    </div>
                </div>
                :
                <div></div>
            
        }
        
            
        </div>
        
   )
}