import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Allcontext } from "./context";
import Description2 from "./Description2";


function App() {
  return (
    <>

      <Allcontext>
        <Header />
        
        <Outlet />
      </Allcontext>
    </>
  );
}

export default App;
