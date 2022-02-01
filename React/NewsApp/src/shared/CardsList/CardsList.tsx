import React, { useEffect, useRef, useState } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { set } from 'react-hook-form';

export function CardsList() {
  const token=useSelector<RootState>(state=>state.token.token);
  const [posts, setPosts] =useState<any[]>([]);
  const [loading, setLoading]=useState(false);
  const [errorLoading, setErrorLoading ] =useState('');
  const bottomOfList=useRef<HTMLDivElement>(null);
  const [nextAfter, setNextAfter ] =useState('');
  const [count, setCount] = useState<number>(0);
  const buttonLoading = useRef<HTMLButtonElement>(null);
  const [postLoading, setPostLoading] = useState(true);


  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');
      try {
        const {data: {data: {after, children}}}=await axios.get(
          'https://oauth.reddit.com/rising/', {
              headers: {Authorization: `bearer ${token}`},
              params: {
                limit: 10,
                after: nextAfter,
              }
          });
          setNextAfter(after);
          setPosts(prevChildren=>prevChildren.concat(...children));
        } catch(error) {
          setErrorLoading(String(error));
      } 
      setLoading(false);
    }

    const observer=new IntersectionObserver((entries)=> {
      if ((entries[0].isIntersecting) && (count<=2)) {
        load(); setCount(count+1);
      } else setPostLoading(false);
    }, {
      rootMargin: '5px'
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, nextAfter, token, postLoading])


  function handleClick() {
    if (buttonLoading.current) buttonLoading.current.innerHTML = 'Загрузка...';
    setCount(0);
    setPostLoading(true);
  }
  return (
    <div >
       <ul className={styles.cardList}>
      {posts.length===0 && !loading && !errorLoading && (
          <div  style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )} 
      {posts.map(post => (
        <Card
        key={post.data.id}
        title={post.data.title}
        text={post.data.selftext}
        cardImage={post.data.thumbnail}
        author={post.data.author}
        karmaCounter={post.data.score}
        />
      ))}


      {loading && (
        <div  style={{textAlign: 'center'}}>Загрузка...</div>
      )}
      {
        errorLoading && (
          <div role="alert" style={{textAlign: 'center'}}>
            {errorLoading}
          </div>
        )
      }
        {
          (count==3 ) && 
          <div className={styles.list}>
            <button className={styles.button} ref={buttonLoading} onClick={handleClick}>Загрузить еще</button>
          </div>
        }

    </ul>
    <div ref={bottomOfList}></div>
    </div>
   
    
  );
}


