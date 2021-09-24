import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext)
  console.log(setUser)
  
  const newUser = {
    id: 1,
    name: "Nelson"
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser(newUser)}
      >
        Login
      </button>
    </div>
  )
}
