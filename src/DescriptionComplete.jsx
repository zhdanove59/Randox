import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import { MyContext } from "./context";

function DescriptionComplete() {
  const { bdd } = MyContext();
  const { continent, id } = useParams();
  const newId = parseInt(id, 10);
  const detail = bdd.filter(
    (elem) => elem.continent === continent && elem.id === newId
  );
console.log(detail)
  return (
    <>
   
      {detail.map((elem) => (
        <Card 
        key={elem.id}
        continent={elem.continent} 
        pays={elem.pays}
        distance={elem.distance}
        durée_heures={elem.durée_heures}
        niveau_difficulte={elem.niveau_difficulte}
        nom={elem.nom}
        img={elem.img}
        index={elem.id}
        
        />
        
      ))}
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
            <img src="/src/image/icons8-facebook-nouveau-48.png" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/src/image/icons8-instagram-48.png" />
          </a>
          <a href="https://twitter.com/?lang=fr">
            <img src="/src/image/icons8-twitter-48.png" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default DescriptionComplete;
