const Addinput=(state="",action)=>{
if(action.type==="INPUT_ADD"){
    return action.payload;
}
return state;
}

export default Addinput;