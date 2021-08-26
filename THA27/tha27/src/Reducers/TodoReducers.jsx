const TodoReducers=(state=[],action)=>{
if(action.type==="ADD"){
    return [...state,action.payload];
}
else if(action.type==="REMOVE"){
    return state.filter((e,index)=>index!==action.payload);
}
else if(action.type==="CLEAR"){
    return state=[];
}
return state;
}
export default TodoReducers;