import React from "react";
import "./Description2.css";
import { Link } from "react-router-dom";

function Description2() {
  return (
    <>
      <section className="containerDescription">
        <div className="blocDescription">
          <h3 className="titleDes2">
            Pourquoi <span className="colored-word">RANDOX</span>
          </h3>
          <div className="texteImg">
            <p className="pdesc2">
              Voyager avec Randox vous offre une expérience de randonnée
              exceptionnelle. Avec une sélection diversifiée d'itinéraires, des
              outils de planification conviviaux et une communauté passionnée,
              Randox rend chaque aventure inoubliable
            </p>
            <img
              src="public/images/rando-europe-1024x683.jpg"
              alt="photo panaoramique dun randonné au norvege"
              className="img-des2"
            />
          </div>
        </div>
      </section>
      {/* {alexandre a juste ajouter le footer juste en dessous} */}
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

export default Description2;
