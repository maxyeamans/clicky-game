import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import heroes from "./heroes.json";
import Card from "./components/Card";

class App extends Component {

  state = {
    heroes: heroes,
    score: 0,
    message: "Click a hero to start. Try to click each hero only once!"
  }

  /*  Since the arrow function below is being passed as a prop to a function component,
      `this` will rise up and refer to the current component */
  handleClick = id => {

    // Mirror state to the function
    let {heroes, score} = this.state;
    // Get the index of the clicked card in the current state's array
    const clickedIndex = heroes.findIndex(hero => hero.id === id);
    // Make it easier to get to this clicked card
    const hero = heroes[clickedIndex];
    // Code for if hero hasn't been clicked and player hasn't won yet
    if (hero.clicked === false && score < 11) {
      console.log(`${hero.source} hasn't been clicked yet.`);
      // Set the card to be clicked
      hero.clicked = true;
      // Set the card's clicked status in state to true
      this.setState({
        // heroes: heroes,
        score: (score + 1),
        message: `Noice, ${hero.source} hadn't been clicked yet.`
      });
    }
    // Code for if hero hasn't been clicked and player has hit high score.
    else if (hero.clicked === false && score === 11) {
      // Reset the clicked status for each hero.
      heroes.forEach( hero => hero.clicked = false);
      // Reset the score to zero and display a victory message.
      this.setState({
        score: 0,
        message: `Noice, ${hero.source} hadn't been clicked yet. Hey, you won! Click any hero to start a new game.`
      });
    }
    // Code for when the player LOSES LIKE A TOTAL LOSER
    else {
      console.log(`${hero.source} has already been clicked!`);
      heroes.forEach( hero => hero.clicked = false);
      this.setState({
        score: 0,
        message: `Bummer, you had already clicked ${hero.source}. Try again!`
      });
    }
    // Randomize the array
    const newHeroes = this.shuffleArray(heroes);
    this.setState({
      heroes: newHeroes
    })
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    return (
      <div className="App">
        <Jumbotron
          message={this.state.message}
          score={this.state.score} 
        />
        <div className="container mb-5">
          <div className="row">
            {this.state.heroes.map(hero => (
              <Card
                source={hero.source}
                alt={hero.source}
                id={hero.id}
                key={hero.id}
                handleClick={this.handleClick}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
