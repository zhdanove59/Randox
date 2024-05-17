import { MyContext } from './context'
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Asie() {
    const { bdd } = MyContext();
    const filtreAsie= bdd.filter((toto)=> toto.continent === "Asie");
    console.log(filtreAsie);
  return (
    <>
    <div className="cont-card">
      {filtreAsie.map((toto) => (
        <Card
          continent={toto.continent}
          pays={toto.pays}
          distance={toto.distance}
          durée_heures={toto.durée_heures}
          niveau_difficulte={toto.niveau_difficulte}
          nom={toto.nom}
          img={toto.img}
          index={toto.id}
        />
      ))}
      </div>
      <footer>
        <h4 className="marque" id="logo-footer">
          Randox
        </h4>
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Accueil</li>
          </Link>
          <Link to="/apropos" style={{ textDecoration: "none" }}>
            <li>A propos</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="reseau">
          <a href="https://www.facebook.com/?locale=fr_FR">
            <img src="./src/image/icons8-facebook-nouveau-48.png" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="./src/image/icons8-instagram-48.png" />
          </a>
          <a href="https://twitter.com/?lang=fr">
            <img src="./src/image/icons8-twitter-48.png" />
          </a>
        </div>
      </footer>
    </>
  );
}
