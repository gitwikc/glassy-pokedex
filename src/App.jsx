import * as React from "react";
import { Switch, Route } from "react-router";
import PokeballIcon from "./icon/favicon.png";
import Home from "./routes/Home";

const App = (props) => {
  return (
    <div className="App">
      <header>
        <div className="icon">
          <img src={PokeballIcon} alt="Pokedex" />
        </div>
        <div className="text">PokeDeck</div>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
