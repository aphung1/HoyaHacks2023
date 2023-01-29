import React from 'react';
import './Card.css';

const Card = ({person}) => {
  return (
        <div className="Card" style={{backgroundImage: `url(${person.url})`}}>
            <h3>{person.name}</h3>
        </div>

  )
}

export default Card