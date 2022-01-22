import { useEffect } from "react";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { MyAction, RootState } from "../reducer";

export const TOKEN='TOKEN';
export type SetTokenAction= {
    type:typeof TOKEN;
    token:string;
}

export  const SetToken:ActionCreator<SetTokenAction>=(token:string) =>({
    type:TOKEN,
    token,
})

export const saveToken=(): ThunkAction<void, RootState, unknown, SetTokenAction> => (dispatch)=> {
    useEffect(() => {
        if (window.__token__)
        dispatch(SetToken(window.__token__));
    }, [])
}