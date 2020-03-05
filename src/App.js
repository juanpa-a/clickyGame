import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import characters from './characters.json';
import ModalComponent from './components/ModalComponent';

class App extends React.Component {

  // Initial state
  state ={
    score: 0,
    topScore: 0,
    clicked: [],
    characters: characters, 
    modalTitle: "",
    modalBody: "",
    show: false
  }

  // Function to shuffle array
  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    this.setState({characters: array});
  }

  // Function to handle when a user has clicked all images correctly
  handleWin = () =>{
    this.setState({
      score: 0,
      clicked: []
    })
    this.handleModalShow("YOU WIN!", "CONGRATS");
  }

  // Function to handle when a user clicked twice on an element
  handleLoss =() =>{
    this.setState({
      score: 0,
      clicked: []
    });
    this.handleModalShow("You lost", "Better luck next time");
  }

  // Function to handle modal show
  handleModalShow = (title, body) =>{
    this.setState({
      modalTitle : title,
      modalBody: body,
      show: true
    });
  }

  // Function to handle modal close
  handleModalClose = () =>{
    this.setState({show: false});
  }

  // Event to handle if an image has been clicked twice
  handleCharacterClick = (id) => {
    if(!this.state.clicked.includes(id)){
      this.setState(state => {
        const newArray = state.clicked.concat(id);
        if(this.state.score === this.state.topScore){
          this.setState({topScore: this.state.topScore +1});
          if(this.state.score === 11){
            this.handleWin();
          }
        }
        this.shuffle(this.state.characters);
        return{clicked: newArray,
               score: this.state.score + 1
        }
      });
    }else{
      this.handleLoss();
    }
  }

  render() {
    return(
    <div>
      < Header score={this.state.score} topScore={this.state.topScore}/>
      < ModalComponent title={this.state.modalTitle} 
                  body={this.state.modalBody} 
                  show={this.state.show} 
                  handleModalClose={() => this.handleModalClose()}/>
        < Wrapper>
        {
          // Iterating the character list to display
          characters.map( element => 
            < Card image={element.image} 
                    name={element.name} 
                    handleCharacterClick={() => this.handleCharacterClick(element.id)}/>
          )
        }
      </ Wrapper>
    </div>
    );
  }
}

export default App;
