import { useState } from 'react'
import logo from '/src/logo.svg'
import '/src/App.css'
import {Link} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
          <nav
              style={{
                paddingBottom: "1rem",
              }}
          >
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
          </nav>
        </div>

      </header>
    </div>
  )
}

export default App
