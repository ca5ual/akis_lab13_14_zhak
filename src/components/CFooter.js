import React from "react";
import './CFooter.css';
//function CFooter () {
    //let date = new Date ();
   // return (<h5>AKiS, przykladowy serwis React. Dzisiaj mamy:{date.toString()}</h5>
   // );
//}

export const CFooter = (props) => {
   let date = new Date ();
   return(
      <div>
      <h5>
            AKiS, przytkladowy serwis React. Dzisiaj mamy: {" "}
            {date.toLocaleDateString("pl-PL")}
        <br/>
        Stan pogody: {props.weather}, temperatura: {props.temp}
            </h5>
      </div>
    );
}


//export const CFooter = () => {
  //  let date = new Date ();
    //return React.createElement('div', {className: 'footerDivClass'},
    //React.createElement('h5', {id:'footerText', className: 'footerTextClass'},
    //'AKiS, przykładowy serwis React. Dzisiaj mamy:' +
    //date.toLocaleDateString('pl-PL'))
    //)
//}
//export default CFooter;