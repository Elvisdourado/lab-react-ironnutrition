import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FormFood from './components/FoodForm'
import Foodbox from "./components/FoodBox"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Added from './components/Added'



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='divForm'>
        <div>
          
          <Foodbox />
        </div>
        <div className='Divfood'>
          <Added/>
          <FormFood/>
          </div>
      </div>

    </div>
  );
}

export default App;
