import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import Home from './Components/pages/Home';
import Login from './Components/pages/Login';
import Register from './Components/pages/Register';
import NavBar from './Components/NavBar';
import {ProductProvider} from './ProductContext';
import {InCartNumProvider} from './InCartNumContext';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Components/pages/Checkout';
import Success from './Components/pages/Success';
import Item from './Components/Item';

function App() {
  return (
    <div className="bg-secondary text-white" style={{minHeight: '100vh'}}>
      <ProductProvider>
        <InCartNumProvider>
          <Router>
            <NavBar/>
            <Container>
              <Switch>
              <Route exact path="https://warm-sands-34549.herokuapp.com/" component={Home}/>
              <Route exact path="https://warm-sands-34549.herokuapp.com/login" component={Login}/>
              <Route exact path="https://warm-sands-34549.herokuapp.com/register" component={Register}/>
              <Route exact path="https://warm-sands-34549.herokuapp.com/cart" component={Checkout}/>
              <Route exact path="https://warm-sands-34549.herokuapp.com/item/:id" component={Item} />
              <Route exact path="https://warm-sands-34549.herokuapp.com/success" component={Success} />
              </Switch>
            </Container>
            <footer className="bg-dark p-2 text-center">
              <span><a href="spadejac000.github.io" target="_blank">View my portfolio </a></span> | 
              <span> Created by Jacob Spade &copy; 2020</span>
            </footer>
          </Router>
        </InCartNumProvider>
      </ProductProvider>
    </div>
  );
}

export default App;

