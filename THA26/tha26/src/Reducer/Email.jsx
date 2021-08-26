const initialEmail="";

const Email = (state = initialEmail,action) =>{
    switch (action.type) {
        case "Email": return state = action.email;
        default: return state;
     }
    }
    export default Email;