import React from "react"
import { useWeb3React} from '@web3-react/core'
import { Button, Typography, Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from "@mui/material"
import { SUPPORTED_CHAINS } from "./chains";

const supported_chain_ids = SUPPORTED_CHAINS.map(chain => chain.chainId)


export function AccountInfoComponent(){
    const { connector, isActive, account , chainId} = useWeb3React();

    const onClickConnectWallet = React.useCallback(()=>{
        const conn = connector.activate()
        if(conn instanceof Promise) conn.catch((e)=>alert(e.message))
    }, [connector])

    const onClickDisconnectWallet = React.useCallback(()=>{
        if(!connector.deactivate) return
        connector.deactivate()
    }, [connector])

    const onSelectChainId = React.useCallback((event: SelectChangeEvent) => {
        if(!connector.provider) return
        const chain_id = Number(event.target.value)
        const chain = SUPPORTED_CHAINS.find(chain => chain.chainId == chain_id)
        const conn = connector.activate(chain)
        if(conn instanceof Promise) conn.catch((e)=>alert(e.message))
    }, [])

    return(
        <React.Fragment>
            {
                isActive ? (
                    <div style={{padding : 20}}>
                        {
                            supported_chain_ids.indexOf(chainId as number) == -1 ? (
                                <div>
                                    <Typography variant="subtitle1" color="error">
                                        Wrong chain id ({chainId}), please select a supported chain from the list below : 
                                    </Typography>
                                    <FormControl>
                                        <InputLabel id="chain-select-label">Chain</InputLabel>
                                        <Select style={{width : 250}} id="chain-select" labelId="chain-select-label" onChange={onSelectChainId}>
                                            {SUPPORTED_CHAINS.map(chain => (
                                                <MenuItem value={chain.chainId}>{chain.chainName}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            ) : (
                                <div style={{padding : 20, display :"flex", flexDirection : "column"}}>
                                    <Typography variant="subtitle1" color="primary">
                                        You're connected successfully !
                                    </Typography>
                                    <Typography variant="body1">
                                        Account : {account}
                                    </Typography>
                                </div>
                            )
                        }
                        {
                            connector.deactivate && (
                                <div>
                                    <Button variant="outlined" onClick={onClickDisconnectWallet}>
                                        Disconnect Wallet !
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div style={{display : "flex", justifyContent : "center", padding : 40}}>
                        <Button variant="contained" onClick={onClickConnectWallet}>
                            Connect Wallet
                        </Button>
                    </div>
                )
            }
        </React.Fragment>
    )
    
}