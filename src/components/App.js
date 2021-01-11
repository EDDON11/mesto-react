import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'



function App() {
const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
const [selectedCard, setSelectedCard] = React.useState()

const handleEditProfileClick = () => {
  setIsEditProfilePopupOpen(true)

}

const handleAddPlacePopupOpen = () => {
  setIsAddPlacePopupOpen(true)

}

const handleEditAvatarPopupOpen = () => {
  setIsEditAvatarPopupOpen(true)

}

const  handleCardClick = (card) => {
setSelectedCard(card)
}


const closeAllPopup = () => {
  setIsEditProfilePopupOpen(false)
  setIsAddPlacePopupOpen(false)
  setIsEditAvatarPopupOpen(false)
  setSelectedCard()
}

  return (
    <div className="page">
   
  <Header/>
  <Main
   onEditAvatar={handleEditAvatarPopupOpen}
   onEditProfile={handleEditProfileClick}
   onAddPlace={handleAddPlacePopupOpen}
   onCardClick={handleCardClick}/>
  <Footer/>
  <PopupWithForm  name={'avatar'}  title={'Обновить Аватар'}   onClose={closeAllPopup} isOpen={isEditAvatarPopupOpen}  button="Сохранить">
  <input required id="avatar-input" className="popup__input popup__input_type_avatar" placeholder="Ссылка на фото" type="url" name="avatar" autoComplete="off" />
  <span id="avatar-input-error" className="popup__error" />
 </PopupWithForm>

  <PopupWithForm  name={'edit'} title={'Редактировать профиль'}  isOpen={isEditProfilePopupOpen} onClose={closeAllPopup} button="Сохранить">
  <input required minLength={2} maxLength={40} id="name-input" className="popup__input popup__input_type_heading" placeholder="Имя" type="text"  name="edit" autoComplete="off" />
  <span id="name-input-error" className="popup__error" />
  <input required minLength={2} maxLength={200} id="about-input" className="popup__input popup__input_type_subheading" placeholder="Вид деятельности" type="text"  name="about" autoComplete="off" />
  <span id="about-input-error" className="popup__error" />
  </PopupWithForm>

  <PopupWithForm  name={'add'} title={'Добавить карточку'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopup}  button="Сохранить">
  <input required minLength={2} maxLength={30} id="title-input" className="popup__input popup__input_type_title" type="text" placeholder="Название" name="name" autoComplete="off" />
  <span id="title-input-error" className="popup__error" />
  <input required id="url-input" className="popup__input popup__input_type_url" type="url" placeholder="Ссылка на картинку" name="link" autoComplete="off" />
  <span id="url-input-error" className="popup__error" />
  </PopupWithForm>

  <ImagePopup  card={selectedCard} onClose={closeAllPopup}></ImagePopup>

  </div>
  
  )
}

export default App;


