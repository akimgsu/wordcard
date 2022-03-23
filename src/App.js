import './App.css';
import Hello from './component/Hello'
import Welcome from './component/Welcome';
import styles from "./App.module.css";

function App() {
  const name = "Top";
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
