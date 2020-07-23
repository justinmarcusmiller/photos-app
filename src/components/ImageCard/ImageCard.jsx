import React, { useState } from "react";
import "./ImageCard.css";
//TODO: Set href to photo's page in flickr
const ImageCard = (props) => {
  const [imgSrc, setImgSrc] = useState(
    "https://farm" +
      props.farm +
      ".staticflickr.com/" +
      props.server +
      "/" +
      props.id +
      "_" +
      props.secret +
      ".jpg"
  );
  return (
    <div className="ImageCard">
      <a href={props.largeUrl} target="_blank" rel="noopener noreferrer"> 
        <img src={imgSrc} alt={props.title} title={props.title + " by " + props.author} />
      </a>
    </div>
  );
};

export default ImageCard;
