import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../Post';
import styles from './textcontent.css';

interface Props {
  title:string;
  text?: string;
  author?:string;
}



export function TextContent({title, text, author}: Props) {
  
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/users/515705/screenshots/17007178/media/9728b7b1c4fcde61b84aca5b6ab01ebf.jpg" alt="avatar" />
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <Link to="/posts/1" className={styles.postLink} >
          {title}
        </Link>
        {/* {isModalOpen && (
          <Post  onClose={()=> {setIsModalOpen(false)}} text={text} title={title}/> 
        )
        } */}
      </h2>
    </div>
  );
}
