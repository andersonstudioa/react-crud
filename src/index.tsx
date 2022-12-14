import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesApp from "./routes"
import './index.css'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  login: boolean;

}

localStorage.setItem("login", "false");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
)
