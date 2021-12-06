import "./App.css";
import "./components/greeting";
import greeting from "./components/greeting";

function App() {
  return <>{greeting("how's it going ?")}</>;
}

export default App;
