const ThemeReducer=(state=false,action)=>{
if(action.type==="THEME"){
    return !state;
}
return state;
}

export default ThemeReducer;