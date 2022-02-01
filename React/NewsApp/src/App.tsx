import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import {Layout} from './shared/Layout';
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import {Text} from "./shared/Text/Text";
import {EColor} from "./shared/Text/Text";
import { Break } from "./shared/Break";
import {  UserContextProvider } from "./shared/Context/userContext";
import { PostsContextProvider } from "./shared/Context/postsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider, useStore} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { MyAction, rootReducer, RootState} from "./store/reducer";
import { saveToken } from "./store/saveToken/actionsToken";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { NoMatch } from "./shared/NoMatch";


const store=createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<RootState, MyAction> ),
));



function AppComponent() {

    const [mounted, setMounted]=useState(false);


    useEffect(() => {
        setMounted(true)
    }, [])
    store.dispatch(saveToken());

     return (
         <Provider store={store}>
             { mounted &&(
                 <BrowserRouter>
                 <UserContextProvider>
                     <PostsContextProvider>
                         <Layout>
                         <Header />
                         <Content>
                            <Switch>
                            <Route exact path={['/', '/auth']}>
                                <Redirect to='/posts'/>
                            </Route>
                            <Route path='/posts'>
                            <CardsList/>
                                <Route path="/posts/:id">
                                    <Post />
                                </Route>
                            </Route>    
                                <Route>
                                    <NoMatch />
                                </Route>
                             </Switch>
                         </Content>
                         </Layout>
                     </PostsContextProvider>
                 </UserContextProvider>
             </BrowserRouter>
             )
             }
            
         </Provider>
    );
};

export const App=hot(()=><AppComponent/>);