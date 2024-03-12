
import { Component } from 'react';
import './App.css';

//Composants enfants de App
const College = ({ categorie, endroit, children }) => {
  //Les props ({categorie,endroit}) utilise une syntaxe moustache: {}
  return (
    <div> Je suis un college de formation continue. <br />
      Je suis un college de type {categorie}.<br />
      Je suis dans la ville de {endroit}.<br />
      {children}
    </div>

  )
}

//Autre manière de mettre en paramètres nos props
/*const College = (props) => {
  return (
    <div> Je suis un college de formation continue. <br/>
      Je suis un college de type {props.categorie}.<br/>
      Je suis dans la ville de {props.endroit}.<br/>
      {props.etudiant} 
      {props.nimportequoi}
       </div>
    
  )
}*/

const Ordinateur = () => {
  return (
    <div> Je suis un ordinateur de bureau </div>
  )
}

//Transformer notre composant App type fonction en type classe
class App extends Component {
  //Autre façon de définir les valeurs des attributs: les états (orienté objet)
  /*state= {cat:"public", lieu:"Gaspesie"}

  changerCollege = () => {
    //Pour changer d'état, il faut utiliser la fonction setState()
    this.setState({ cat: "prive", lieu: "Montréal" })
  }*/

  //Déclarer le state avec un array
  state = { informations: [{ cat: "prive", lieu: "quebec" }, { cat: "public", lieu: "montreal" }] }

  changerCollege = () => {
    this.setState(
      { informations: [{ cat: "public", lieu: "gaspesie" }, { cat: "semi-public", lieu: "saguenay" }] }
    )
  }

  render() {
    return (
      <div className="App">
        <h1> Bonjour ! Comment allez-vous? </h1>
        <College categorie={this.state.informations[1].cat} endroit={this.state.informations[1].lieu} /><br /><br />

        <College categorie="public" endroit="Montreal" etudiant="Roua" /><br /><br />
        <College categorie="prive" endroit="Quebec" nimportequoi="abc" /><br /><br />

        <College> Je suis fermé les fins de semaine </College><br />
        <Ordinateur /><br />

        <button onClick={this.changerCollege}> Changer le college </button>
      </div>
    );
  }
}

//Autre manière d'exporter le composant App
//export default function App() {

//Ancienne manière de déclarer une fonction
//function App() {

//Nouvelle manière de déclarer une fonction
/*const App = () => {
  return (
    <div className="App">
      <h1> Bonjour ! Comment allez-vous? </h1>
    </div>
  );
}*/

export default App;
