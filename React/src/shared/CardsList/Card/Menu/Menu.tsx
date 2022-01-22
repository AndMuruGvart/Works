import React from 'react';
import { MenuIcon } from '../../../Icons/MenuIcon';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { Text, EColor } from '../../../Text';
import { MenuItemList } from './MenuItemList';


export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
      <button className={styles.menuButton}>
        <MenuIcon/>
      </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemList postId='111245'/>
        <button className={styles.closeButton}>
          <Text mobileSize={12} size={14} color={EColor.grey66} >
            Закрыть
          </Text>

        </button>
        </div>

      </Dropdown>
    </div>
  );
}
