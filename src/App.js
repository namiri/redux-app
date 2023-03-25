import Header from "./containers/Header";
import {
  BrowserRouter as Router,  Route, Routes
} from "react-router-dom";

import "./App.css";
import ProductList from "./containers/ProductList";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductList}></Route>
          <Route path="/product/:id" exact Component={ProductDetail}></Route>
          <Route path="/404" >404</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
