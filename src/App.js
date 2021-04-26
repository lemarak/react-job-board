import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header title={"The Job Board"} />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
