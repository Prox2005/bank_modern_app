import "./App.css";
import {
  Navbar,
  Header,
  Data,
  Business,
  Billing,
  Card,
  Quotes,
  Brands,
  Service,
} from "./components";

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
      <Service />
    </div>
  );
}

export default App;
