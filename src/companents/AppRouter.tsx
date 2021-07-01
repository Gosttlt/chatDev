/** @format */

import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Context } from '..'
import { privateRoutes, publucRoutes } from 'routes'
import { CHAT_ROUTRE, LOGIN_ROUTRE } from 'utils/const'
import { useAuthState } from 'react-firebase-hooks/auth'

const AppRouter: React.FC = () => {
  const { auth } = useContext(Context)
  const [isAuth] = useAuthState(auth)

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={CHAT_ROUTRE} />
    </Switch>
  ) : (
    <Switch>
      {publucRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={LOGIN_ROUTRE} />
    </Switch>
  )
}
export default AppRouter
