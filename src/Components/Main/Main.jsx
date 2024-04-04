import { Component } from 'react';
import './Main.css';
import hpCover from '/hp.jpg';

export class Main extends Component {
  render() {
    const actors = this.props.actors;
    return (
      <>
        <main>
          <div className="mainImg">
            <p className="textOnBgImg">
              Погрузитесь в мир кино: Встречайте новый фильмовый хит!
            </p>
          </div>

          <div className="discription">
            <div className="cover">
              <img
                src={hpCover}
                alt="Harry Potter cover"
                className="coverImg"
              />
            </div>
            <div className="info">
              <p className="genre">
                <span className="aboutFilm">Жанр: </span> фэнтези
              </p>
              <p className="country">
                <span className="aboutFilm">Страна: </span> Великобритания
              </p>
              <p className="studio">
                <span className="aboutFilm">Студия: </span> Warner Bros.
                Pictures
              </p>
              <p className="year">
                <span className="aboutFilm">Год выхода: </span> 2001
              </p>
              <p className='actors'>
                <span className="aboutFilm">Актеры: </span>
                <span>{actors.join(', ')}</span>
              </p>
              <p className="plot">
                «Гарри Поттер» - это серия фильмов, основанных на романах
                британской писательницы Дж. К. Роулинг. Сюжет повествует о
                приключениях молодого волшебника Гарри Поттера и его друзей,
                Рона Уизли и Гермионы Грейнджер, в школе волшебства и
                чародейства Хогвартс. Главный сюжетный линии связаны с
                противостоянием Гарри и его друзей тёмному волшебнику Лорду
                Волан-де-Морту, который стремится вернуться к власти и
                уничтожить мир волшебства и обычный мир. Сюжет также исследует
                темы дружбы, преданности, семьи, и выращивания личности, в то
                время как персонажи сталкиваются с различными испытаниями и
                опасностями в своем путешествии к победе над злом.
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
