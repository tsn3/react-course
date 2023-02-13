import './App.css'
import user from "./user.json"

export const Greeting = (props) => {
  const {name, ...rest}= props;
  console.log({rest})
  return (
    <h1 className="greeting" {...rest}>
      Hello<i> {name}</i>. Welcome!
    </h1>
  )
}

function App() {

  return (
    <main className="app">
      <Greeting name="Everyone" style={{border: "solid red"}} aria-hidden={true} />
      <h1>About me</h1>
      <div>Name: {user.name}</div>
      <div>Skills: css {user.skills.css}</div>
      <ul>
        {user.hobbies.map((hobby) => (
            <li key={hobby}>{hobby}</li>
        ))}
      </ul>

      <a href={`mailto:${user.email}`}>Email me</a>
    </main>
  )
}

export default App
