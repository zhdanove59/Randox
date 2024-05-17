import { MyContext } from "./context";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Europe() {
  const { bdd } = MyContext();
  const filtreEurope = bdd.filter((tata) => tata.continent === "Europe");
  console.log(filtreEurope);
  return (
    <>
      <div className="cont-card">
        {filtreEurope.map((tata) => (
          <Card
            continent={tata.continent}
            pays={tata.pays}
            distance={tata.distance}
            durée_heures={tata.durée_heures}
            niveau_difficulte={tata.niveau_difficulte}
            nom={tata.nom}
            img={tata.img}
            index={tata.id}
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
