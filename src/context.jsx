import { createContext, useContext, useState } from "react";
import bdd from "./bdd.json";

const Context = createContext();

export function Allcontext({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Context.Provider value={{ open, setOpen, bdd }}>
      {children}
    </Context.Provider>
  );
}

export const MyContext = () => useContext(Context);
