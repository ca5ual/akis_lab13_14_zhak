import React, {Component} from "react";
import './CContents.css';
import jsonData from './res/text.json';

class CContents extends Component {
    constructor() {
        super ()
        this.state = {msg: 'Witaj uzytkowniku. Kliknij na przycisk aby poznac wiadomosc'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
    }

    changeMsg () {
        this.setState({msg: 'Wlasnie jesteś uczęstnikiem lab React, gratulacje'});
    }

    render () {
        const items = [];
        for (let i = 0; i<this.txtData().count; i++) {
            let value = this.txtData().text[i];
            items.push (
                <div id={`"div${i+1}"`} className="contentsFlex">
                    <img className="contentsFlexImg" src={'/akis_lab13_14_zhak/public/img/img'+(i+1)+'.png'} alt =""></img>
                    
                    <p className="contentsFlexTxt">{value}</p>
                </div>
            );
        }

        return(
            <div className="contentsDivClass">
            {items}
                <h1>{this.state.msg}</h1>
                <button onClick = {()=>this.changeMsg()}>
                    Kliknij, aby poznac tajemnicę
                </button>
            </div>
        );
    }
}

export default CContents;