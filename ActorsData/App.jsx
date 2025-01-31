import "./App.css";
import { ActorsData } from "./components/ActorsData"; // Import ActorsData component

function App() {
  return (
    <div className="App">
      <ActorsData tableOf={1} />
    </div>
  );
}

export default App;
