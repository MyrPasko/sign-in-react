import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import MaterialButton from "./components/MaterialButton/MaterialButton";
import MaterialSwitch from "./components/MaterialSwitch/MaterialSwitch";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.Link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className={styles.Name}>My name is Myroslav</h1>
        <Switch>
          <Route path='/auth' component={Auth}/>
          <Route path='/'/>
          <Route path='/results'/>

        </Switch>

        <MaterialButton text="Shit button" />
        <MaterialSwitch />
      </header>
    </div>
  );
};

export default App;
