import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Provider} from "react-redux";

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

import {store} from './store';
import './App.css'

function App() {

  return (
    <div className="App">
      <Provider store={store}>     <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/cart' element={<Cart/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
