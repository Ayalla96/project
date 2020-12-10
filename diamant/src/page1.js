import React from 'react';
import './page1.css';
import Logo from './images/logo.jpg';
import NavigationBar from './component/navigationBar';
export default class Inscription extends React.Component {
    constructor() {
        super();
        //fixation du this
        this.message = this.message.bind(this)
        this.changeTxt= this.changeTxt.bind(this)
    };
    name="user";
    message() { alert("Bienvenue "+this.name) }

    changeTxt  (e) {
        console.log(e);
        this.name = e.target.value;
        console.log(e.target.value);
        console.log(this.name);
    }

    render() {
        return ( <div id="corpus">
            <NavigationBar/>
            <h1 id="Slogan">Ayalla , Creation & Design  </h1>
      <p id=" sous-slogan"> Creez le Bijoux de vos reves</p>
            <img src={Logo} alt="Logo" id="slogan"/>
            <h1>
            <input type="button" tabIndex="1" onClick={this.message}/>
            <input type="text" tabIndex="2" placeholder="Name" onChange={this.changeTxt}/>
            </h1>
        </div>)
    }
}