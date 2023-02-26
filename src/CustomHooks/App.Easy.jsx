import {useState} from "react";

const toggleFlag = (state) => !state
const useToggle = (defaultValue) => {
  const [isGood, setIsGood] = useState(defaultValue)
  const toggle = () => {
    setIsGood(toggleFlag)
  }
  return [isGood, toggle]
}

export const App = () => {
  const [isGood, toggle] = useToggle(false)
  return(
    <main>
      {isGood ? 'Good' : 'Bad'}
      <button onClick={toggle}>Toggle</button>
    </main>
  )
}