import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import MaterialButton from "./components/MaterialButton/MaterialButton";
import MaterialSwitch from "./components/MaterialSwitch/MaterialSwitch";
import { Route, Switch, withRouter, Redirect, Link, NavLink } from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import Search from "./containers/Search/Search";
import Results from './containers/Results/Results';

type AppProps = {
  isAuthenticated?: boolean,
}

type AppState = {
  isAuthenticated?: boolean,
  shit: boolean,
}

class App extends Component<AppProps, AppState> {
  state = {
    isAuthenticated: false,
    shit: true,
  };

  changeAuthHandler = (): void => {
    this.setState(({ isAuthenticated }) => ({ isAuthenticated: !isAuthenticated }));
  }

  render() {
    const { isAuthenticated } = this.state;
    let navigation = (
      <nav>
        <NavLink to='/auth'>Authentication</NavLink>
      </nav>
    )
    let routes = (
      <Switch>
        <Route path='/auth' component={Auth}/>
        <Redirect to='/auth' />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/search' component={Search}/>
          <Route path='/results' component={Results}/>
          <Redirect to='/search' />
        </Switch>
      );
      navigation = (
        <nav>
          <NavLink to='/search'>Search</NavLink>
          <NavLink to='/results'>Results</NavLink>
        </nav>
      )
    }

    return (
      <div className={styles.App}>
        <button onClick={this.changeAuthHandler}>Change auth</button>
        {navigation}
        {routes}
      </div>
    );
  }
};

export default App;
