import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import * as web3 from "@solana/web3.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
const endpoint = web3.clusterApiUrl("devnet");
const wallet = new PhantomWalletAdapter();

root.render(
  <React.StrictMode>
    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[wallet]}>
          <WalletModalProvider>
          <App />
        </WalletModalProvider>
        </WalletProvider>

    </ConnectionProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
