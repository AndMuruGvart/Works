import React, { useContext } from 'react';
import { keys } from '../../../webpack.config';
import { postsContext } from '../Context/postsContext';
import styles from './posts.css';

export function Posts() {
  const data=useContext(postsContext);
  console.log(data);
  
  
  const NamesList = () => (
    <div>
      <ul>{data.map(name => <li className={styles.marginTop} key={name.data.title}> {name.data.title} </li>)}</ul>
    </div>
  );

  return (

    <div> <NamesList/> </div>
    
  );
}
