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
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/cart" component={Checkout}/>
              <Route exact path="/item/:id" component={Item} />
              <Route exact path="/success" component={Success} />
              </Switch>
            </Container>
          </Router>
        </InCartNumProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
