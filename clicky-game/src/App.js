import React, { Component } from 'react';
import images from "./data.json"
import Navbar from "./components/Navbar"
import Container from "./components/Container"
import Card from "./components/Cards"
import Scores from "./components/ScoreCard"
import './App.css';

class App extends Component {
  state = {
    images,
    score: 0,
    hiScore: 0,
    clicked: []
  }
 
  //tanx josh, <3 you vvvv
  shuffle_cards = images => {
    const shuffled = images.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
    //console.log(shuffled);
    return shuffled;
  }

  handleClick = id => {

    if (this.state.clicked.indexOf(id) === -1) {
     
      this.handle_score();
      this.setState({ clicked: this.state.clicked.concat(id) });
  
    } else {
      this.game_over();
    }
    };

  handle_score = () => {
    console.log(this.state.hiScore)
    const updateScore = this.state.score + 1;
    this.setState({
      images: this.shuffle_cards(images),
      score: updateScore,
    });

    if (updateScore >= this.state.hiScore) {
      this.setState({ hiScore: updateScore });
    } else if (updateScore === 12) {
      alert("You win!")
    }
  }

  game_over = () => {
    this.setState({
      score: 0,
      hiScore: this.state.score,
      clicked: [],
      cars: this.shuffle_cards(images)
    })
    alert("game over");
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Scores
          score={this.state.score}
          hiScore={this.state.hiScore}
        />
        <Container>
          <div className="row col s3 m4">
            {this.state.images.map(elem => <Card
              key={elem.id}
              src={elem.images}
              id={elem.id}
              handleClick={this.handleClick}
              handleScore={this.handle_score}
              endGame={this.game_over}
              score={this.state.score}
              hiScore={this.state.handle_score} />)}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
