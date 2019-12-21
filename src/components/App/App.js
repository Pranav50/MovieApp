import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from '../elements/Header/Header'
import Home from '../Home/Home'
import Movie from '../Movie/Movie'
import NotFound from '../elements/NotFound/NotFound'
import './App.css';

function App() {
  return (
    <BrowserRouter basename='/MovieApp/'>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/:movieId" component={Movie} exact />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
