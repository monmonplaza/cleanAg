import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Faq from "./pages/Faq";
import Nav from "./components/Nav/Nav";
import Contact from "./pages/Contact";
import Stories from "./pages/Stories";
import Products from "./pages/Products";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/company" component={Company} />
          <Route path="/stories" component={Stories} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
