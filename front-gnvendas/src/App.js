import './App.css'
import Header from "./components/Header";
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import { ProductProvider } from './stores/ProductStore';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import FinishedBuy from './components/FinishedBuy';


function App() {
  
  return (
    <Router>
      <ProductProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/finishedBuy" component={FinishedBuy} />
        </Switch>
        
        
      </div>
      </ProductProvider>

    </Router>
    
  );
}

export default App;
