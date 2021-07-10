import React from 'react';
import './Food.css';

/*function Food({foods,calorie}){
   //const=props;
   return(
       <div className="yash">
           <h2>
               {foods || "Junk food"}<br/>
           </h2>
           <h3>"you have consumed {calorie ||"1500"} cals today"</h3>
       </div>
   )
}*/
function Food(props){
    const{foods,calorie}=props;
    return(
        <div className="yash">
            <h2>
                {foods || "Junk food"}<br/>
            </h2>
            <h3>"you have consumed {calorie ||"1500"} cals today"</h3>
        </div>
    )
 }
export default Food;