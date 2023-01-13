// import logo from './logo.svg';
import './App.css';
import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';

function App() {
  return (
    <div className="App">
    <CHeader aName = "Jan" aFamily = "Kowalski"/>
 
    <CFooter weather = "słoneczna" temp = "25"/>
    <CFooter weather = "deszczowa" temp = "13"/>
    <CFooter weather = "śnieżna" temp = "-6"/>
        
    </div>
  );
}

export default App;
