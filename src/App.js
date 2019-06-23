import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
// import './App.css';

import Stocks from './components/Stocks';
import { Route, BrowserRouter } from 'react-router-dom' 

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={Stocks} />
        </header>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
