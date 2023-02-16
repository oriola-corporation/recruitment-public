import styles from './App.module.css'
import Weather from "./components/Weather";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>The weather channel</h1>
      </header>
      <main className={styles.main}>
        <Weather/>
      </main>
      <footer className={styles.footer}>
        © Kronans Apotek AB {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
