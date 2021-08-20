import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from './Yash';
function Profile(){
    const logger = useContext(Context);
return(
    <div>
        {logger.loggedIn?<h1>You are LoggedIn..!!</h1>:<Redirect to="/Home"/>}
        <h1>Now you're in Profile</h1>
    </div>
  )
}

export default Profile;