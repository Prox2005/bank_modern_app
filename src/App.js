import "./App.css";
import { Navbar, Header, Data, Business, Billing } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Data />
      <Business />
      <Billing />
    </div>
  );
}

export default App;
