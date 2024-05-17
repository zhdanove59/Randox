import { MyContext } from './context'
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Afrique() {
    const {bdd} = MyContext();
    const filtreAfrique= bdd.filter((titi) => titi.continent === 'Afrique');
    console.log(filtreAfrique);
  return (
    <>
    <div className="cont-card">
    {filtreAfrique.map((titi,index)=> (
      
        <Card
        continent={titi.continent}
        pays={titi.pays}
        distance={titi.distance}
        durée_heures={titi.durée_heures}
        niveau_difficulte={titi.niveau_difficulte}
        nom={titi.nom}
        img={titi.img}
        index={index} />
        
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


    
  )
}
