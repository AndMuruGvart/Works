import React from 'react';
import styles from './menuitemlist.css';
import { BlockIcon } from '../../../../Icons/BlockIcon';
import { Text, EColor } from '../../../../Text';
import { WarningIcon } from '../../../../Icons/WarningIcon';
import { CommentsIcon } from '../../../../Icons/CommentsIcon';
import { ShareIcon } from '../../../../Icons/ShareIcon';
import { SaveIcon } from '../../../../Icons/SaveIcon';


interface IMenuItemListProps {
  postId:string;

}

export function MenuItemList({postId}:IMenuItemListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <CommentsIcon/>
        <Text size={12} color={EColor.grey66}> Комментарии</Text>
      </li>
      <div className={styles.divider}/>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <ShareIcon/>
        <Text size={12} color={EColor.grey66}> Поделиться</Text>
      </li>
      <div className={styles.divider}/>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <BlockIcon/>
        <Text size={12} color={EColor.grey66}> Скрыть</Text>
      </li>
      <div className={styles.divider}/>
      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <SaveIcon/>
        <Text size={12} color={EColor.grey66}> Сохранить</Text>
      </li>
      <div className={styles.divider}/>
      <li className={styles.menuItem}>
        <WarningIcon/>
        <Text size={12} color={EColor.grey66}> Пожаловаться</Text>
      </li>

    </ul>
  );
}
