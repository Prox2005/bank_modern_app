import "./App.css";
import { Navbar, Header, Data, Business, Billing, Card, Quotes } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Data />
      <Business />
      <Billing />
      <Card />
      <Quotes />
    </div>
  );
}

export default App;
