/** @format */

import { useContext } from 'react'
import { Context } from 'index'
import firebase from 'firebase'
import Button from 'companents/Button/Button'
import s from './Login.module.css'

const Login: React.FC = () => {
  /** Запрос данных auth из контекста . */
  const { auth } = useContext(Context)
  /** Запрос на авторизацию в гугл  . */
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  return (
    <div className={s.login_box}>
      <Button text='Войти с помощю Google' onClickHandler={login} />
    </div>
  )
}
export default Login
