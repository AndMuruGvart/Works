import React, { useState } from 'react';
import styles from './dropdown.css';
import ReactDOM from 'react-dom';
import { DropdownPortal } from './DropdownPortal';


interface IDropdown {
  button: React.ReactNode;
  children:React.ReactNode;
  onClose?: () => void;
}


export function Dropdown(props:IDropdown) {
  const [isDropdownOpen, setIsDropdownOpen] =useState(false);
  return (
    <div className={styles.container} onClick={()=>{setIsDropdownOpen(true)}}>
      <div id='dropdown_root'>
        {props.button}
      </div>
      {isDropdownOpen && (
        <DropdownPortal children={props.children} onClose={()=> {setIsDropdownOpen(false)}} />
      )}
     
    </div>
  );


}

