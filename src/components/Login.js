import React, { useState } from "react"
import "./Login.css"

function isNumeric(val) {
  return val.match(/^[0-9]+$/) != null
}

const Login = ({ updateLogin }) => {
  const [password, setPassword] = useState("")
  const [inValidPassword, setInValidPassword] = useState(false)

  const submitPassword = (evt) => {
    evt.preventDefault()
    const currentPassword = isNumeric(password)

    if (!currentPassword) {
      setInValidPassword(true)
      setTimeout(() => {
        setInValidPassword(false)
      }, 5000)
      return
    }

    updateLogin(true)
  }

  return (
    <form onSubmit={submitPassword} className='login-form'>
      <label>Enter your pin:</label>
      <input
        className='login-label'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login-btn' type='submit'>
        Sign In
      </button>
      {inValidPassword && (
        <span className='error'>We are not able to verify this account</span>
      )}
    </form>
  )
}

export default Login
