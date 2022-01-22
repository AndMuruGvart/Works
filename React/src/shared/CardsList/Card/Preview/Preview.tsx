import React, { useState } from 'react';
import styles from './preview.css';


interface Props {
  cardImage?: string,
}

export function Preview({cardImage}: Props) {
  let image;
  if (cardImage && cardImage !== 'default' && cardImage !== 'self' && cardImage !== 'nsfw' ) {
    image = <img className={styles.previewImg} src={cardImage} alt="picture" />;
  } else {
    image = <img className={styles.previewImg} src=" https://cdn.dribbble.com/users/627451/screenshots/17005653/media/950814cf86e0b4085f6c406deef9de06.png?compress=1&amp;resize=800x600" alt="picture" /> ;
  }

  return (
    <div className={styles.preview}>
      {image}
    </div>
  );
}
