import {Component} from "react";
import {ConfirmationDialog} from "./ConfirmationDialog.jsx";
import {RegisterForm} from "./RegisterForm.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      confirmationOpen: false,
      isConfirmed: false
    };
  };

  confirmUserData = (data) => {
    this.setState({...this.state, user: data})
    this.setState({...this.state, confirmationOpen: true})
  }

  closeDialog = () => this.setState({...this.state, confirmationOpen: false})

  confirm = () => {
    this.closeDialog()
    this.setState({...this.state, isConfirmed: true})
  }


  render() {
    return (
      <>
        <main>
          {this.state.isConfirmed ? (`Congratulation user ${this.state.user.email}`
          ) : (
            <RegisterForm onSubmit={this.confirmUserData}/>
          )}

        </main>
        <ErrorBoundary>
          <ConfirmationDialog
            title={"Please confirm registration"}
            cancel={this.state.closeDialog}
            open={this.state.confirmationOpen}
            confirm={this.confirm}
          >
            <p>Please confirm your email: {this.state.user.email}</p>
          </ConfirmationDialog>
        </ErrorBoundary>
      </>
    )
  }
}

export default App
