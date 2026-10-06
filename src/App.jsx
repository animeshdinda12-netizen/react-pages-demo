import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <header className="hero">
        <span className="badge">Live on GitHub Pages</span>
        <h1>
          React <span className="plus">+</span> Vite
        </h1>
        <p className="subtitle">
          A React single-page app built with Vite and deployed straight to
          GitHub Pages.
        </p>

        <div className="counter">
          <button onClick={() => setCount((c) => c - 1)} aria-label="decrement">
            &minus;
          </button>
          <span className="count">{count}</span>
          <button onClick={() => setCount((c) => c + 1)} aria-label="increment">
            +
          </button>
        </div>
        <p className="hint">
          The counter proves the JavaScript bundle is running — it is a real,
          interactive React app, not a static page.
        </p>
      </header>

      <section className="cards">
        <article className="card">
          <h3>Vite</h3>
          <p>Instant dev server and an optimised production build.</p>
        </article>
        <article className="card">
          <h3>React 19</h3>
          <p>Component-based UI with hooks and fast re-renders.</p>
        </article>
        <article className="card">
          <h3>GitHub Pages</h3>
          <p>Served as static files over HTTPS, free for public repos.</p>
        </article>
      </section>

      <footer className="footer">
        <a
          href="https://github.com/animeshdinda12-netizen/react-pages-demo"
          target="_blank"
          rel="noreferrer"
        >
          View the source on GitHub
        </a>
      </footer>
    </div>
  )
}

export default App
