import React, { Component } from "react";
import DragonCard from "./components/DragonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import clicky from "./clicky.json";
import "./App.css";


import Counter from "./components/counter";





class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    clicky,
    score: 0,
    highScore: 0,

  };
  componentDidMount() {
    this.setState({
      clicky: this.shuffle(this.state.clicky)
    })
  }
  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  handleDragonCardClick = (id) => {
    console.log(id);
    let newClickyData = [...this.state.clicky]
    //create loop to check if did click is already true if so end game end state
    //increment the score if not already true
    newClickyData[id].didClick = true


    this.setState({
      clicky: this.shuffle(newClickyData)

    })
  }
  render() {
    return (

      <Wrapper>



        <div className="jumbotron">
          <h1>Clicky Game</h1>
          <p>
            Click on as many images as you can without clicking the same image twice!
    </p>

          <h3>Score : {this.state.score}</h3>
          <h3>High Score : {this.state.highScore}</h3>
        </div>




        {this.state.clicky.map(dragon => (
          <DragonCard

            id={dragon.id}

            name={dragon.name}
            image={dragon.image}
            onDragonCardClick={this.handleDragonCardClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
