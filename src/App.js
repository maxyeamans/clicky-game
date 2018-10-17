import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron"
import heroes from "./heroes.json";
import Card from "./components/Card";

class App extends Component {

  state = {
    heroes: heroes,
    score: 0,
    message: "Click a hero to start. Try to click only once!"
  }

  handleClick = id => {

    // Mirror state to the function
    let heroes = this.state.heroes;
    // Get the index of the clicked card in the current state's array
    const clickedIndex = heroes.findIndex(hero => hero.id === id);
    // Make it easier to get to this clicked card
    const hero = heroes[clickedIndex];
    // Check to see if that card has been clicked yet
    if (hero.clicked === false) {
      console.log(`${hero.source} hasn't been clicked yet.`);
      // Set the card to be clicked
      hero.clicked = true;
      // Set the card's clicked status in state to true
      this.setState({
        // heroes: heroes,
        score: (this.state.score + 1),
        message: `Noice, ${hero.source} hadn't been clicked yet.`
      });
    }
    else {
      console.log(`${hero.source} has already been clicked!`);
      // ! Delete the line below if it breaks the game
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
