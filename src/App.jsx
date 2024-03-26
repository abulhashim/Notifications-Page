import { useState } from "react";
import Header from "./Components/Header";
import data from "./content";
import Notification from "./Components/Notification";

const App = () => {
  const [state, setState] = useState([...data]);

  return (
    <div className="max-w-[45.65rem] rounded-xl bg-White px-4 pt-8 font-PlusJakartaSans md:mb-[5.25rem] md:mt-16 lg:px-8">
      <Header state={state} setState={setState} />
      <main>
        {state.map((item) => {
          return <Notification key={item.id} {...item} />;
        })}
      </main>
    </div>
  );
};

export default App;
