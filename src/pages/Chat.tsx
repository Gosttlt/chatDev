/** @format */

import { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from 'index'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Preloader from 'companents/Preloader/Preloader'
import firebase from 'firebase'
import s from './Chat.module.css'
import Button from 'companents/Button/Button'
import Message from './Message'

const Chat: React.FC = () => {
  /** Присвоение модулей из контекста. */
  const { auth, firestore } = useContext(Context)
  /** Получение объекта юзера. */
  const [user] = useAuthState(auth)
  /** Установка состояния импута и функции для изменения его состояния. */
  const [value, setValue] = useState('')
  /** Функция запроса в бд + сортировка. */
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  )
  /** Создание компонент сообщений .
   * @param {string} key -ключ компонента
   * @param {string} uid - id пользователя
   * @param {string} userId -id юзера который отправил сообщение
   * @param {string} photoUrl - ссылка на аватар пользователя
   * @param {string} displayName - Имя пользователя
   * @param {string} text - текст сообщения
   */
  const messagesArr = messages?.map(m => (
    <Message
      key={m.createdAt}
      uid={user?.uid}
      userId={m.userId}
      photoUrl={m.photoUrl}
      displayName={m.displayName}
      text={m.text}
    />
  ))

  /** Функция берет значение инпута и отправляет в бд, после обновляет состояние инпута и перересовывает компонент chat */
  const sendMessage = async () => {
    firestore.collection('messages').add({
      userId: user?.uid,
      displayName: user?.displayName,
      photoUrl: user?.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setValue('')
  }
  /** Если сообщения загружаются с бд показывать прелоадер. */
  if (loading) {
    return <Preloader />
  }

  return (
    <div className={s.chat_box}>
      <h1>Chat Page</h1>
      <div className={s.messages_box}>{messagesArr}</div>
      <div className={s.send_box}>
        <input
          type='text'
          className={s.input}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button text='send' onClickHandler={sendMessage} />
      </div>
    </div>
  )
}
export default Chat
