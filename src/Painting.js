import React from 'react';

const Painting = props =>
      <li>
        <div onClick={() => props.selectPainting(props.painting)} className="painting">
          <img src={props.painting.image} alt={props.painting.title}/>
          <p>Title: {props.painting.title}</p>
          <p>
          Artist: {props.painting.artist.name}</p>
          <p>
          {props.painting.artist.birthday} - {props.painting.artist.deathday}
          </p>
        </div>
      </li>


export default Painting;
