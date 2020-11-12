import './App.css';
import {Switch, Route, Link} from "react-router-dom";
import PokemonList from './containers/PokemonList';
import Pokemon from './containers/Pokemon';
import MyPokemonList from './containers/MyPokemonList';
import images from './images/pokemon-logo.png'

function App() {
  return (
    <div className="App">
      <img src={images} class="logo"/>
      <Switch>
        <Route path={"/pokemon"} exact component={PokemonList}/>
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon}/>
        <Route path={"/mypokemonlist"} exact component={MyPokemonList}/>
      </Switch>
      <div className="menu">
        <ul>
          <li>
            <Link to={"/pokemon"}> All Pokemon List </Link>
          </li>
          <li>
            <Link to={"/mypokemonlist"}>My Pokemon List </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
