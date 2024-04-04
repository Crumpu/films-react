import { Component } from 'react';
import './Header.css';
import whiteLogo from '/logo-white.png';

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        <header>
          <nav>
            <ul className="filmList">
              {movies.map((movie) => {
                return <li key={movie}>{movie}</li>;
              })}
            </ul>
          </nav>
          <div className="logoDiv">
            <img src={whiteLogo} alt="logo" className="logoImg" />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
