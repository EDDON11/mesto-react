import React from 'react'
import {api} from '../utils/Api.js'
import Card from './Card.js'

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
const [userName, setUserName] = React.useState('')
const [userJob, setUserJob] = React.useState('')
const [userAvatar, setUserAvatar] = React.useState('')
const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api.getUserInfo().then((userData) => {
    setUserName(userData.name);
    setUserJob(userData.about);
    setUserAvatar(userData.avatar);
  })
});

React.useEffect(() => {
  api.getInitialCard().then((cardData) => {
    setCards(cardData);
  });
}, []);

return(
    <main className="content">
    <section className="profile">
      <div className="profile__avatar-container">
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <button className="profile__avatar-button" onClick={onEditAvatar}/>
      </div>
      <div className="profile__info">
        <div className="profile__info-name">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__edit-button" onClick={onEditProfile} />
        </div>
        <p className="profile__subtitle">{userJob}</p>
      </div>
      <button type="button" className="profile__add-button" onClick={onAddPlace}/>
    </section>
    <section className="elements">
    {cards.map((card) => (
            <Card onCardClick={onCardClick} key={card._id} card={card} link={card.link}
            name={card.name}/>))}
    </section>
  
  </main>
);
}

export default Main