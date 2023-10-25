import { createContext, useState } from "react";

export const userContextData=createContext();

export const ProviderData=({children})=>{
    const [data,setData]=useState({
        name:"dipankar",
        lastname:"chetia"
    })
    return(
        <userContextData.Provider value={{data,setData}}>
          {children}
        </userContextData.Provider>
    )
}
