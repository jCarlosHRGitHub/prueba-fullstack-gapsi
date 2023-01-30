import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { Proveedores } from './pages/Proveedores';
import { NavBar } from './components/NavBar'

const App = () => (
  <>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/proveedores" exact component={Proveedores} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;