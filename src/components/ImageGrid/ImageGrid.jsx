import React from 'react';
import ImageCard from '../ImageCard/ImageCard.jsx'
import './ImageGrid.css';
//TODO: only display if there is data
const ImageGrid = (props) => {
  return ( 
    <div id="ImageGrid">
      {props.images.map((image) => {
        return (
          <ImageCard
            key={image.id} 
            id={image.id}
            secret={image.secret}
            server={image.server}
            farm={image.farm}
            title={image.title}
            userId={image.owner}
            author={image.ownername}
            largeUrl={image.url_l}
          />
        )
      })}
    </div>
  );
}

export default ImageGrid;