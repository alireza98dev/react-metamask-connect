import React from 'react';
import {  CssBaseline } from '@mui/material';
import { Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { initializeConnector } from '@web3-react/core'
import { AccountInfoComponent } from './account.view';

const metamask_connector = initializeConnector<MetaMask>((actions) => new MetaMask({ actions, onError: console.warn }))


function App() {
  const connectors = React.useMemo(()=>[metamask_connector], [])

  return (
    <React.Fragment>
      <CssBaseline/>
      <Web3ReactProvider connectors={connectors}>
        <AccountInfoComponent/>
        
      </Web3ReactProvider>
    </React.Fragment>
  );
}

export default App;
