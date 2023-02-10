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
  Footer,
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
      <Footer />
    </div>
  );
}

export default App;
