import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import App from './App.UseState'
// import App from "./App.Tricky.jsx";
// import App from "./App.Effect.jsx";
// import {App} from "./FormExample/App.Form";
import App from "./FormExample/App.Form.Class";
import ErrorBoundary from "./FormExample/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
