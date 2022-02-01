
import React, { useState, useEffect, createClass } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "/styles.css"
import { PhotoBox } from "./PhotoBox.jsx";

function Arrow(props) {
  
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? ">" : "<";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

function customPaging(i) {
  return <span>{i + 1}</span>;
}

function appendDots(dots) {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <ul style={{ margin: "3px" }}> {dots} </ul>
    </div>
  );
}

let renderFotoArray=[
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/565611267567e7c2faf69bdfe6994e09544d57577ab7_b.jpg?PressFoto_13011376.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/565884167567fc8e5623558f2f0b8f6eef349e0cbfc1_b.jpg?PressFoto_13012794.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/565611167567fbac7a62d3e9f4753640a21c2378d167_b.jpg?PressFoto_13011375.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/56566476756715ea1600bca1b1d91e1c2321917e539c_b.jpg?PressFoto_13011436.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/56588906756732f7468dc87cd9b4d2269d7a8d3959e7_b.jpg?PressFoto_13012500.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/5659161675674f0ee60000e81fd6601b16c06e7e6b0c_b.jpg?PressFoto_13012546.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.04/5637462672103e0d0a7f3cb3b6333374ac3977911d13_b.jpg?PressFoto_12998134.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2016.01/1085164667210d7d9293fbf5af2c2f56a1d27c366054f_b.jpg?PressFoto_10851646.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/5656606675674886a894ab675f6a4683048916ed142a_b.jpg?PressFoto_13011359.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/569232867567aa4a2e624b59749542f12a1e550ba00c_b.jpg?PressFoto_13032658.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/56560986756758ab5fe576bc3d67862e6fd02b99bf2a_b.jpg?PressFoto_13011352.jpg",
"https://www.pressfoto.ru/mediasample/s.pfst.net/2017.05/565886667567876565a8ce9b12c1229eaea92f5e78a3_b.jpg?PressFoto_13012820.jpg"
];

let checkedArray=[];

for (let i=0; i<renderFotoArray.length; i++) {
  const newItem = {
    id: Math.random().toString(36).substr(2,9),
    src: renderFotoArray[i],
    paste: false,
    delete:false,
  }
  checkedArray.push(newItem);
}

let count=0;

export default function App() {
  const [checked, setChecked]=useState(checkedArray);
  const [quantity, setQuantity]=useState(0);

   const handleCheck = (id) => {

    setChecked([
      ...checked.map((check) => 
        check.id === id ? { ...check, paste: !check.paste } : {...check },
      )
    ]);
  }

  const removePicture = (id) => {
    setChecked([...checked.filter((check) => check.id !== id)])
  }

  function handleUnCheck() {
    setChecked([
      ...checked.map((check) => 
        check.paste === true ? { ...check, paste: false } : {...check },
      )
    ]);
  }

  const removeAllPicture = () => {
    setChecked([...checked.filter((check) => check.paste == false)])
  }

  useEffect(()=>{
    function pasteImages(checked) {
      let count=0;
      for (let check of checked) 
      if (check.paste) count++;
      setQuantity(count);
    }
      pasteImages(checked);

  },[checked]);

        const renderSlides = () =>checked.map(check => (
        <PhotoBox
        number={renderFotoArray.indexOf(check.src)}
        id={check.id}
        checked={check.paste}
        toggleTask={handleCheck}
        src={check.src}
        removePicture={removePicture}
         />
      ));

      document.addEventListener('keydown', function(event) {
        if (event.code == 'Escape') {
         handleUnCheck();
        }
      });  


    const settings = {
      className: "center",
      centerMode: false,
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      slidesToScroll: 1
    }; 

  return (
   <div>
      <div className="fotoQuantity">{checked.length} ИЗОБРАЖЕНИЙ</div>
      <div className="App">
      <Slider {...settings}
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={true}
        customPaging={customPaging}
        appendDots={appendDots}
      >
        {renderSlides()}
      </Slider>
      <div className="footer">
        <div className="footer__picture">{quantity} изображений выбрано</div>
        <div onClick={() => removeAllPicture()} className="footer__del">Удалить выбранные</div>
        <div className="footer__esc">Для отмены нажмите ESC</div>
      </div>
    </div>
  </div>
  );
}
