/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { createContext } from 'react'

firebase.initializeApp({
  apiKey: 'AIzaSyAc_Nmxv6nGzKCe1Jx-j_rjuYpUCqUJq_w',
  authDomain: 'chat-3ab99.firebaseapp.com',
  projectId: 'chat-3ab99',
  storageBucket: 'chat-3ab99.appspot.com',
  messagingSenderId: '974048912251',
  appId: '1:974048912251:web:8fbfd3ab758f06f96693de',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

export const Context = createContext({ auth, firestore, firebase })

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider
      value={{
        auth,
        firestore,
        firebase,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
