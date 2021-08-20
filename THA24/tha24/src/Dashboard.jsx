import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from './Yash';
function Dashboard(){
    const logger = useContext(Context);
return(
    <div>
        {logger.loggedIn?<h1>You are LoggedIn..!!</h1>:<Redirect to="/Home"/>}
        <h1>Now you're in Dashboard</h1>
    </div>
  )
}

export default Dashboard;