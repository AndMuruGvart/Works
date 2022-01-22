import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface Props {
  title:string;
  text?: string;
  cardImage?: string,
  karmaCounter?: number;
  author?: string
}



export function Card({title, karmaCounter, text, author, cardImage}: Props) {
  return (
    <li className={styles.card}>
      <TextContent title={title} text={text} author={author}  />
      <Preview cardImage={cardImage} />
      <Menu/>
      <Controls karmaCounter={karmaCounter}/>
    </li>
  );
}
