import logo from './logo.svg';
import './App.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { BalanceDisplay } from './components/account_info';
require('@solana/wallet-adapter-react-ui/styles.css')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WalletMultiButton />
        <BalanceDisplay></BalanceDisplay>
      </header>
    </div>
  );
}

export default App;
