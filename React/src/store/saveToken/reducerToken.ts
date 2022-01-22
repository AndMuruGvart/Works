import { Reducer } from "react";
import { RootState } from "../reducer";
import { SetTokenAction, TOKEN } from "./actionsToken";


export type TokenState={
    token:string;
}


export const tokenReducer:Reducer<TokenState, SetTokenAction> = (state, action) => {
    switch (action.type) {
        case TOKEN: 
        return {
            ...state,
            token: action.token,
        };
        default: return state;
    }
}