/** @format */

import Chat from './pages/Chat'
import Login from './pages/Login'
import { LOGIN_ROUTRE, CHAT_ROUTRE } from './utils/const'

export const publucRoutes = [
  {
    path: LOGIN_ROUTRE,
    Component: Login,
  },
]

export const privateRoutes = [
  {
    path: CHAT_ROUTRE,
    Component: Chat,
  },
]
