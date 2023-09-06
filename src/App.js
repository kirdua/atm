import { useState } from "react"
import Login from "./components/Login"
import Account from "./components/Account"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const updateLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        {!isLoggedIn && <Login updateLogin={updateLogin} />}
      </header>
      {isLoggedIn && <Account />}
    </div>
  )
}

export default App
