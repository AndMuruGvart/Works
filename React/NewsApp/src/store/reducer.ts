import { ActionCreator, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { SetTokenAction, TOKEN } from "./saveToken/actionsToken";
import {  tokenReducer, TokenState} from "./saveToken/reducerToken";

export type RootState = {
    commentText:string;
    token: TokenState;
    me: MeState;
}

const initialState:RootState={
    commentText: 'Привет, Skillbox!',
    token:{
        token:'',
    },
    me: {
        loading:false,
        error: '',
        data:{},
    },

};


const UPDATE_COMMENT='UPDATE_COMMENT';
type UpdateCommentAction= {
    type:typeof UPDATE_COMMENT;
    text:string;
}


export const updateComment:ActionCreator<UpdateCommentAction>=(text:string) =>({
    type:UPDATE_COMMENT,
    text,
})


export type MyAction=UpdateCommentAction
|SetTokenAction
|MeRequestAction
|MeRequestSuccessAction
|MeRequestErrorAction



export const rootReducer:Reducer<RootState, MyAction>=(state=initialState, action) => {
    switch (action.type) {
       case UPDATE_COMMENT: 
        return {
            ...state,
            commentText: action.text,
        };

        case TOKEN: 
        return {
            ...state,
            token: tokenReducer(state.token, action),
        };

        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            }


        default:
             return state;
    }
    
}


