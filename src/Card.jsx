import React from "react";
import { Link, useParams } from "react-router-dom";


export default function Card({
  continent,
  pays,
  distance,
  durée_heures,
  niveau_difficulte,
  nom,
  img,
  index
}) {
 const {id} = useParams();
  return (
    <>
      <div className={id ? "cardcomplet" : "card"} >
        <Link to={`/description/${continent}/${index}`} ><img
          src={`/public/images/cards/${continent}/${img}`}
          alt="photo de paysage sur rio brezil"
          className={id ? "imgCardComplet" : "imgCard"}
        /></Link>
        <div className="cardDesc">
          <h4 className="villeWord">{nom}</h4>
          <p>Continent : {continent}</p>
          <p>Pays : {pays}</p>
          <p>Distance : {distance} </p>
          <p>Durée : {durée_heures} heures</p>
          <div className="niveau">
            <p>Niveau Difficulté : {niveau_difficulte} / 5 {id ? "..." : ""} </p>
            
          </div>
        </div>
      </div> 

   </>
  );
}
