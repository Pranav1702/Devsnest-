const Name = (state = "",action) =>{
    switch (action.type) {
        case "Name": return state = action.name;
        
        default: return state;
     }
    }
    export default Name;