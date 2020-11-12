import React, {useState, useEffect} from 'react';
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
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const parsedTheme = localStorage.getItem("bg-secondary text-white") || ""
    setTheme(parsedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem("bg-secondary text-white", theme)
  }, [theme])

  const handleTheme = (e) => {
    e.preventDefault()
    if(theme.length === 0) {
      setTheme("bg-secondary text-white")
    } else {
      setTheme('')
    }
  }

  return (
    <div className={theme} style={{minHeight: '100vh'}}>
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
            <footer className="bg-dark p-2 text-center text-white">
              <span><a href="spadejac000.github.io" target="_blank">View My Portfolio </a></span> | <span><a href="" onClick={(e) => {handleTheme(e)}}>Change Theme</a></span> |
              <span> Created by Jacob Spade &copy; 2020</span> 
            </footer>
          </Router>
        </InCartNumProvider>
      </ProductProvider>
    </div>
  );
}

export default App;

