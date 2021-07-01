/** @format */

import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from 'index'
import s from './s.module.css'

import Button from 'companents/Button/Button'

const NavBar: React.FC = () => {
  const { auth } = useContext(Context)
  const [isAuth] = useAuthState(auth)
  const signOut = () => auth.signOut()

  return (
    <div className={s.nav_box}>
      {isAuth && <Button text='Logout' onClickHandler={signOut} />}
    </div>
  )
}
export default NavBar
