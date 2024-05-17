// import { useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./context";

function Menuburger() {
  const { open,setOpen } = MyContext();
  // const [close,setClose] = useState()
  return (
    <>
      {open && (
        <div className="menuburger">
          <button type="button" className="fermeture" onClick={()=>setOpen(!open)}>
            &#9746;
          </button>
          <ul>
          <Link to="/" style={{ textDecoration: "none" }} onClick={()=>setOpen(!open)}>
              <li>Accueil</li>
            </Link>
            <Link to="/amerique" style={{ textDecoration: "none" }} onClick={()=>setOpen(!open)}>
              <li>Amérique</li>
            </Link>
            <Link to="/europe" style={{ textDecoration: "none" }} onClick={()=>setOpen(!open)}>
              <li>Europe</li>
            </Link>
            <Link to="/afrique" style={{ textDecoration: "none" }} onClick={()=>setOpen(!open)}>
              <li>Afrique</li>
            </Link>
            <Link to="/asie" style={{ textDecoration: "none" }} onClick={()=>setOpen(!open)}>
              <li>Asie</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Menuburger;
