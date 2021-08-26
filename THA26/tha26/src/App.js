import React from 'react';
import './App.css';
import { name ,email } from "./actions/Index";
import {useDispatch,useSelector} from 'react-redux';

function App() {
  const n = useSelector((state) => state.Name);
  const e = useSelector((state) => state.Email);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="yash">
          
          <div>
        <h1 >Create An Account</h1>
      </div>
            <br />
            <label>Username:</label>
            <input className="t1" type="text"placeholder="username"
              onChange={(e) => {
                dispatch(name(e.target.value));
              }}
            />
            <br />
            <label>Email:</label>
            <input type="text" placeholder="xyz@gmail.com"
              onChange={(e) => {
                dispatch(email(e.target.value));
              }}
            />
          </div>
  
          <div className="bansal">
          
            <h2 >Show the value</h2>
            <span >Username:<br/>{n}</span>
            <br />
            <span >Email:<br/>{e}</span>
          </div>
        </div>
  );
}

export default App;
