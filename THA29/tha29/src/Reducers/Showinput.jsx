const Showinput=(state={},action)=>{
    if(action.type==="SHOW_CARD"){
        return action.payload;
    }
    return state;
}

export default Showinput;