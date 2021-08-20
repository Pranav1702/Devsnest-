import React, { useContext } from 'react';
import Context from './Yash';

function Home() {
    const logger=useContext(Context);
    const toggleLogin=()=>{
        logger.toggle()
    }
return(
    <div>
        <h1>Home</h1>
        <h2>If not logged in can't access Profile & Dashboard </h2>
        <button onClick={toggleLogin}>{logger.loggedIn?"Logout":"Login"}</button>
    </div>
  )
}

export default Home;