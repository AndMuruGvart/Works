import React  from "react";
import { useUserData } from "../../hooks/useUserData";

export interface IUserContextData {
    name?:string;
    iconImage?:string;
    loading?:boolean;
  }


export const userContext=React.createContext<IUserContextData>({});

export function UserContextProvider({children}: {children:React.ReactNode}) {
    const {data, loading}=useUserData();

    return (
      <userContext.Provider value={data}>
        {children}
      </userContext.Provider>
    )
}