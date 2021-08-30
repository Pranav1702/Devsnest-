import {combineReducers} from "redux";
import Addinput from "./Addinput";
import Showinput from "./Showinput";
import ThemeReducer from "./ThemeReducer";

const rootReducer = combineReducers({
    place:Addinput,
    placeData:Showinput,
    theme:ThemeReducer,
});

export default rootReducer;