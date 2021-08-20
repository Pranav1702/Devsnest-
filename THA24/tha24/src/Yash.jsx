import React, { createContext, useState } from 'react';

const Context=createContext(null);

function Yash({children}){
    const [loggedIn,setLoggedIn]=useState(false);
    const logger={
        loggedIn:loggedIn,
        toggle: ()=>{
            setLoggedIn(!loggedIn)
        }
    }

    return(
        <Context.Provider value={logger}>
            {children}
        </Context.Provider>
    )
}

export default Context;
export {Yash};