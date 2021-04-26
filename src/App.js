import "./App.css";
import Header from "./Header";
import Job from "./Job";
import Jobs from "./Jobs";

function App() {
  return (
    <div>
      <Header title={"The Job Board"} />
      <Jobs />
    </div>
  );
}

export default App;
