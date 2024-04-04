import { Component } from 'react';
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="address">
            <p>
             Warner Bros. Studios в Бербанке: 3400 Warner Blvd, Burbank,
              CA 91505, United States
            </p>
          </div>
          <div className="directorEmail">
            <a href="mailto:criscolambus@gmail.com" type="email">
              Написать Крису Коламбусу
            </a>
          </div>
          <div className="devTel">
            <a href="tel:+380660000000">Телефон разработчика сайта</a>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
