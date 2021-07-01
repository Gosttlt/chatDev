/** @format */

import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import './App.css'
import AppRouter from 'companents/AppRouter'
import NavBar from 'companents/NavBar/NavBar'
import Preloader from 'companents/Preloader/Preloader'

const App: React.FC = () => {
  const { auth } = useContext(Context)
  const loading = useAuthState(auth)

  return (
    <BrowserRouter>
      <div style={{ width: '1200px', margin: '0 auto' }}>
        <NavBar />
        {loading[1] ? <Preloader /> : <AppRouter />}
      </div>
    </BrowserRouter>
  )
}

export default App
