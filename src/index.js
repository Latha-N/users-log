import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import configureStore from './store/ConfigureStore'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})

 ReactDOM.render(
  <Provider store={store}>
        <App/>
</Provider>,
  
  document.getElementById('root')
);

