const addItems=(e)=>{
    return{
        type:"ADD",
        payload:e,
    }
    
}
const removeItems=(e)=>{
    return{
        type:"REMOVE",
        payload:e,
    }
}
const clearAll = () => {
    return {
        type : "CLEAR"
    }
}
export {addItems,removeItems, clearAll};