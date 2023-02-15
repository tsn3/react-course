import {useState} from "react";

export const App = () => {
  const [user, setUser] = useState({})
  const [confirmationOpen, setConfirmationOpen] = useState(false)
  const [isConfirmed, setConfirmed] = useState(false)
  const confirmUserData = (data) => {
    setUser(data)
    setConfirmationOpen(true)
  }
  const closeDialog = () => setConfirmationOpen(false)

  const confirm = () => {
    closeDialog()
    setConfirmed(true)
  }

  return (
    <>
      <main>
        {isConfirmed ? (`Congratulation user ${user.email}`
        ) : (
          <RegisterForm onSubmit={confirmUserData}/>
        )}
      </main>
      <ConfirmationDialog
        title={"Please confirm registration"}
        cancel={closeDialog}
        open={confirmationOpen}
        confirm={confirm}
      >
        <p>Please confirm your email: {user.email}</p>
      </ConfirmationDialog>
    </>
  )
}

const RegisterForm = ({onSubmit}) => {
  const [user, setUserData] = useState({email: '', password: ''})
  const setUserEmail = (e) => {
    const email = e.target.value
    setUserData({...user, email})
  }
  const setUserPassword = (e) => {
    const password = e.target.value
    setUserData({...user, password})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const {email, password} = user;

    if (!email.includes('@')) {
      return
    }

    if (!password.trim()) {
      return
    }

    onSubmit(user)
  }

  return (
    <>
      <h1>Please, register</h1>

      <form onSubmit={handleFormSubmit}>
        <AppInput
          name="email"
          label="Email"
          type="email"
          onChange={setUserEmail}
          value={user.email}
          required={true}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="password"
          onChange={setUserPassword}
          value={user.password}
          required={true}
        />
        <button>Submit</button>
      </form>
    </>
  )
}


const ConfirmationDialog = ({title, children, confirm, cancel, open}) => {
  return (
    <dialog open={open}>
      <div>{title}</div>
      <div>{children}</div>
      <div>
        <button type={"button"} onClick={confirm}>
          Confirm
        </button>
        <button type={"button"} onClick={cancel}>
          Cancel
        </button>
      </div>
    </dialog>
  )
}

function AppInput({label, name, className, ...rest}) {
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}