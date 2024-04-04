import { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends Component {
  state = {
    movies: ['Gladiator', 'Harry Potter', 'LOTR'],
    actors: [
      'Daniel Radcliffe',
      'Emma Watson',
      'Rupert Grint',
      'Alan Rickman',
      'Maggie Smith',
      'Robbie Coltrane',
      'Ralph Fiennes',
      'Helena Bonham Carter',
      'Gary Oldman',
      'Michael Gambon',
    ],
  };

  render() {
    return (
      <>
        <Header movies={this.state.movies} />
        <Main actors={this.state.actors} />
        <Footer />
      </>
    );
  }
}

export default App;
