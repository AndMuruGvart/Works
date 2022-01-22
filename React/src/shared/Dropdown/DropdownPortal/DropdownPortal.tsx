import React, { useEffect, useRef } from 'react';
import styles from './dropdownportal.css';
import ReactDOM from 'react-dom';




interface IDropdownPortal {
  children:React.ReactNode;
  onClose?: () => void;
}

const NOOP=() => {};

export function DropdownPortal(props:IDropdownPortal) {
  const ref=useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event:MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
     
        props.onClose?.();
      }
    }

    document.addEventListener('click', handleClick) 
    return () => {
      document.removeEventListener('click', handleClick); 
    }
  }, [])
  
  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  return ReactDOM.createPortal ((

        <div className={styles.listContainer} ref={ref}>
          <div className={styles.list}>
            {props.children}
          </div>
        </div>
  ), node);

}
