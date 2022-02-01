import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";


interface IPostsData {
   kind?:string;
   data?:any;
  }

export function usePostsData() {
    const [data, setData] = useState<IPostsData[]>([]);
    const token =useSelector<RootState>(state=>state.token.token);
    useEffect(() => {
        axios.get(
        'https://oauth.reddit.com/best.json?limit=20&sr_detail&after', {
            headers: {Authorization: `bearer ${token}`}
        })
        .then((resp) =>{
            const postsData=resp.data.data.children;
            setData(postsData);
        })
        .catch(console.log)
        
    }, [token])


    return [data];
}