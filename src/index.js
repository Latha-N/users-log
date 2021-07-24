import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import configureStore from './store/ConfigureStore'
import { BrowserRouter } from 'react-router-dom';

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
  console.log(store.getState())
})

 ReactDOM.render(
   <BrowserRouter>
     <Provider store={store}>
        <App/>
</Provider>
   </BrowserRouter>
,
  
  document.getElementById('root')
);

