// import logo from './logo.svg';
import './App.css';
import CContents from './components/CContents';
// import {CFooter} from './components/CFooter';
import CHeader from './components/CHeader';

    
function App() {
  return (
    <div className="App">
    <CHeader aName = "Denys" aFamily = "Zhak"/> 
    <CContents/>
 

     {/* <CFooter weather = "deszczowa" temp = "13"/>
    <CFooter weather = "słoneczna" temp = "25">
      <p>
        Niebo jest bezchmurne, wiatr slaby
      </p>
   </CFooter> */}
        
    </div>
  );
}

export default App;
