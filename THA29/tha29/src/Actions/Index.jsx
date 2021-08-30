const addPlace=(place)=>{
    return{
        type:"INPUT_ADD",
        payload:place,
    };
};
const show=(place)=>{
    return (dispatch)=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=fd51216a4e234550b8b80653212908&q=${place}`)
    .then((res)=> res.json())
    .then((data)=>{
      dispatch({
          type:"SHOW_CARD",
          payload:data,
      })
    });
    };
};
const Theme=()=>{
    return{
        type:"THEME",
    };
};

export {addPlace,show,Theme};