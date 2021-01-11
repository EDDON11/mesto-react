import React from 'react'

function Card({card, onCardClick}) {
    
function handleClick() {
    onCardClick(card)
}

return(

    <div className="element">
       <button className="element__delete-button" type="button"></button>
       <img className="element__pic" src={card.link} alt={card.name} onClick={handleClick}/>
       <div className="element__rectangle">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__like-container">
          <button type="button" className="element__like"></button>
          <p className="element__likos">{card.likes.length}</p>
       </div>
       </div>
    </div>



)

}

export default Card