
import './App.css';
import Inputfield from './Components/Inputfield';
import Cardfield from './Components/Cardfield';
import {useSelector} from 'react-redux';
import ColourChane from './Components/ColourChane';
function App() {
  const theme=useSelector((state)=>state.theme);
  return (
    <div className={ theme ?"App dark":"App"}>
      <Inputfield />
      <Cardfield />
      <ColourChane />
    </div>
  );
}

export default App;
