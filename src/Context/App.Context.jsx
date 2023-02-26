import {useEffect, useState} from "react";
import {UserContext, useUserData } from './user-contex'

const userData = {
  userName: 'Serhii',
  age: 42,
  email: 'my-email@gmail.com',
  isConfirmed: false,
}

export default function App() {
  const [user, setUser] = useState(null)
  useEffect(( ) => setUser(userData), [])
  const confirmUserAccount = () => {
    setUser({...user, isConfirmed: true})
  }
  return (
    <div className="component-1 component">
      {user ? (
        <UserContext.Provider value={{...user, confirmUserAccount}}>
          <Main />
        </UserContext.Provider>
      ) : (
        'loading'
      )}
    </div>
  )
}

const Main = () => {
  return (
    <main className="component-2 component">
      <UserCard />
    </main>
  )
}

const UserCard = () => {
  const {userName, isConfirmed} = useUserData()
  return (
    <div className="component-3 component">
      <h1>
        Hello, {userName} {isConfirmed ? '(Verified)' : '(Unconfirmed)'}
      </h1>
      <UserInfo />
    </div>
  )
}

const UserInfo = () => {
  const {age, email,userName, isConfirmed, confirmUserAccount} = useUserData()
  return (
    <div className="component-4 component">
      <p>Name: {userName}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {isConfirmed  ? ('Account Confirmed') : ('Account Unconfirmed')}
      <button onClick={confirmUserAccount} type={"button"} >Confirm</button>
    </div>
  )
}