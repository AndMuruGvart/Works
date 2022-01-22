import React, { useState } from 'react';
import { CommentIcon } from '../../Icons/Comments';
import { CommentsIcon } from '../../Icons/CommentsIcon';
import { ShareIcon } from '../../Icons/ShareIcon';
import { WarningIcon } from '../../Icons/WarningIcon';
import { Text, EColor } from '../../Text';
import styles from './comments.css';
import { ReplyForm } from './ReplyForm';


export function Comments() {
  const userName='Михаил Рогов';
  const [isReply, setIsReply]=useState(false);
   return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <a href='#' className={styles.commentIcon}><CommentIcon/></a>
      <div>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img className={styles.avatar} src="https://cdn.dribbble.com/users/515705/screenshots/17007178/media/9728b7b1c4fcde61b84aca5b6ab01ebf.jpg" alt="avatar" />
            <a href="#user-url" className={styles.username}>{userName} </a>
          </div>
          <span className={styles.createdAt}>
          4 часа назад
            <span className={styles.publishedLabel}>Лига юристов</span>
          </span>
        </div>
        <div className={styles.title}>
          <p className={styles.postLink}>
          Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. 
          </p>
        </div>
        <div>
          <ul className={styles.menuItemsList}>
            <li className={styles.menuItem}  >
              <CommentsIcon/>
              <Text size={12} color={EColor.grey66}>
                <a href='#' className={styles.replyLink} onClick={(e)=>{setIsReply(true); e.stopPropagation(); e.preventDefault();}}>Ответить </a>
              </Text>
            </li>
            <li className={styles.menuItem}>
              <ShareIcon/>
              <Text size={12} color={EColor.grey66}> Поделиться</Text>
            </li>
            <li className={styles.menuItem}>
              <WarningIcon/>
              <Text size={12} color={EColor.grey66}> Пожаловаться</Text>
            </li>
            </ul>
        </div>
      </div>
     </div>
     <div id="answer_root" >
     {isReply && (
              <ReplyForm  onClose={()=> {setIsReply(false)}}/> 
            )
            }
     </div>
    </div>
    
    
  );
}
