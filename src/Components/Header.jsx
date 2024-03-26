/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function Header({ state, setState }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const unreadCount = state.filter((item) => !item.isRead).length;
    setCount(unreadCount);
  }, [state]);

  function handleClick() {
    setState(
      state.map((item) => {
        return { ...item, isRead: true };
      }),
    );
  }

  return (
    <>
      <header className="mb-6 flex items-center">
        <h1 className="text-VerDarkBlue text-2xl font-bold">Notifications</h1>
        <div className="ml-2 rounded-md bg-Blue px-2.5 font-medium text-White">
          {count}
        </div>
        <button
          onClick={handleClick}
          className="ml-auto text-DarkGrayishBlue hover:text-Blue"
        >
          Mark all as read
        </button>
      </header>
    </>
  );
}

export default Header;
