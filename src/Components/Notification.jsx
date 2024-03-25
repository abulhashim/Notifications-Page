/* eslint-disable react/prop-types */
import { useMyContext } from "../App";

const Notification = ({
  id,
  avatar,
  name,
  action,
  actionOn,
  timestamp,
  message,
  picture,
  isRead,
}) => {
  const { state, setState } = useMyContext();

  function handleClick() {
    const updatedState = state.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: true };
      }
      return item;
    });
    setState(updatedState);
  }

  return (
    <main>
      <button
        className={`mt-2.5 flex gap-3 rounded-md p-4 transition-colors duration-300 md:px-5 md:py-4 ${
          !isRead && "bg-VeryLightGrayishBlue"
        }`}
        onClick={handleClick}
      >
        <div className="lg:basis-1/12">
          <img src={avatar} alt="avatar" className="w-11" />
        </div>
        <div className="flex basis-11/12">
          <div>
            <p className="text-DarkGrayishBlue ">
              <span className="font-extrabold capitalize text-VeryDarkBlue hover:cursor-pointer hover:text-Blue">
                {name}
              </span>
              {"  "}
              {action}
              {"  "}
              <a
                href="#"
                className={`cursor-pointer font-bold hover:text-Blue ${
                  action.includes("group") && "text-Blue "
                }`}
              >
                {actionOn}
              </a>
              <span
                className={`ml-2 inline-block h-2 w-2 rounded-full bg-Red transition-all duration-300 ${
                  !isRead ? "opacity-100" : "opacity-0"
                }`}
                aria-labelledby="unread mark"
              ></span>
            </p>
            <p className="block text-GrayishBlue">{timestamp}</p>
            {message !== undefined && (
              <div className="mt-3 rounded-lg border border-GrayishBlue px-5 py-3 text-DarkGrayishBlue transition-colors duration-300 hover:cursor-pointer hover:border-LightGrayishBlue1 hover:bg-LightGrayishBlue1">
                <p>{message}</p>
              </div>
            )}
          </div>
          {picture !== undefined && (
            <div className="ml-auto max-w-[2.75rem] hover:cursor-pointer">
              <img src={picture} alt="posted image" />
            </div>
          )}
        </div>
      </button>
    </main>
  );
};
export default Notification;
