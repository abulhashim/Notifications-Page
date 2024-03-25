import { createContext, useContext, useState } from "react";
import Header from "./Components/Header";
import data from "./content";
import Notification from "./Components/Notification";

const Context = createContext();
export const useMyContext = () => useContext(Context);

const App = () => {
  const [state, setState] = useState([...data]);

  return (
    <Context.Provider value={{ state, setState }}>
      <div className="font-PlusJakartaSans max-w-[45.65rem] rounded-xl bg-White px-4 pt-8 md:my-16 lg:px-8">
        <Header />
        {state.map((item) => {
          return <Notification key={item.id} {...item} />;
        })}
      </div>
    </Context.Provider>
  );
};

export default App;
