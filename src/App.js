import React, { useState, useEffect } from 'react';
import './App.css';
import CountryList from './country-list'
/* import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer' */
import ActionList from './action-list'
import Header from './header'
import CountryPage from './country-page'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

//EXPORTADO A CARPETA REDUX/REDUCERS.JS
/* const initialState = {
  countryList: [],
  countryListByName: [],
  coutryFilteredByRegion: [],
  filterByRegion: '',

}

//EXPORTADO A CARPETA REDUX/STORE.JS
const store = createStore(reducer, initialState) */

//ELIMINACION DE LA IMPORTACION DEL STORE EN app.js, SE TRASLADA ESO A INDEX.JS
/* import store from "./redux/store" */

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])
  return (
    <main className={mainClass}>
     {/*  <Provider store={store}> */}
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <Switch>
            <Route path="/country/:id" component={CountryPage} />
            <Route path="/">
              <ActionList />
              <CountryList />
            </Route>
          </Switch>
        </Router>
    {/*   </Provider> */}
    </main>
  );
}

export default App;
