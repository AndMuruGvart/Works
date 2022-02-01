import React from "react";
import { useState } from "react";
import "/styles.css"

export function PhotoBox(props) {

  return (
    <div className="card" key={props.id}>
          <div  className={`checkbox ${props.checked ? "checkbox--active" : ""}`}  onClick={() => props.toggleTask(props.id)}>
          </div>
          <div  className={`delete `}  onClick={() => props.removePicture(props.id)}>
          </div>
        <h3 ><img className="image" src={props.src}/></h3>
        <div className="fotoText" >Изображение {props.number+1}</div>
     </div>
  );
}
