function Accueil() {
  return (
    <>
      <div className="description-accueil">
        <h2 className="cki">
          C&apos;est qui <span className="spancki">Randox ..!?</span>
        </h2>
        <p style={{ fontFamily: "arial" }}>
          Depuis sa création en 1998, Randox s&apos;est imposé comme une
          référence incontournable pour les passionnés de randonnée. Avec une
          interface conviviale et des fonctionnalités innovantes, ce site offre
          aux randonneurs une expérience incomparable. De la planification
          d&apos;itinéraires à la découverte de nouveaux sentiers en passant par
          le suivi en temps réel, Randox répond à tous les besoins des amoureux
          de la nature. Rejoignez la communauté Randox et partez à
          l&apos;aventure dès aujourd&apos;hui!
        </p>
      </div>
      <div className="div-video">
        <video
          src="./src/image/video.mp4"
          className="video"
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
}

export default Accueil;
