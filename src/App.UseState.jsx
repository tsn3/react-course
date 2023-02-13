import {Component, useState} from "react";

class App1 extends Component {
  state = { data: false }
  toggle = () => this.setState({ data: !this.state.data })

  render() {
    const { data } =this.state
    return (
      <main>
        <h1>Class component with State</h1>
        <p>{data === true ? 'True' : 'False' }</p>
        <button onClick={this.toggle}> Toggle </button>
      </main>
    )
  }
}

const App = () => {
  const [confirmation, setState] = useState({ isConfirmed: false} )
  const toggle = () => {
    setState({isConfirmed: true})
    console.log(confirmation.isConfirmed)
  }

  return (
    <main>
      <h1>Class component with State</h1>
      <p>{confirmation.isConfirmed === true ? 'True' : 'False' }</p>
      <button onClick={toggle}> Toggle </button>
    </main>
  )
}

export default App
