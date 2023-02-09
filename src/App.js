import "./App.css";
import { Navbar, Header, Data, Business, Billing, Card, Quotes, Brands } from "./components";

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
      <Brands />
    </div>
  );
}

export default App;
