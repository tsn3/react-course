import {createContext, useContext, useEffect, useState} from "react";

const emptyUser = {
  userName: '',
  age: 0,
  email: '',
  isConfirmed: false
}

const UserContex = createContext(emptyUser)

const userData = {
  userName: 'Serhii',
  age: 42,
  email: 'my-email@gmail.com',
  isConfirmed: false,
  confirmUserAccount: () => {},
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
        <UserContex.Provider value={{...user, confirmUserAccount}}>
          <Main />
        </UserContex.Provider>
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
  const {userName, isConfirmed} = useContext(UserContex)
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
  const {age, email,userName, isConfirmed, confirmUserAccount} = useContext(UserContex)
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