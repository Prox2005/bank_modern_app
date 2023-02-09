import "./App.css";
import { Navbar, Header, Data, Business, Billing, Card } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Data />
      <Business />
      <Billing />
      <Card />
    </div>
  );
}

export default App;
