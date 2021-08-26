const name = (e)=> {
    return {
        type : "Name",
        name : e
    }
}
 const email = (e)=> {
    return {
        type : "Email",
        email : e 
    }
}
export {name,email};