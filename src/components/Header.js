import hamburgerIcon from "../assets/hamburger (1).png";
import youtubeLogo from "../assets/youtube (1).png";
import notificationIcon from "../assets/bell.png";
import userIcon from "../assets/user.png";
import searchIcon from "../assets/search-interface-symbol.png";
import mikeIcon from "../assets/voice.png";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../utils/redux/sideMenuSlice";

function Header() {
  const dispatch = useDispatch();

  function toggleSideBarHandler() {
    dispatch(toggleSideMenu());
  }

  return (
    <header className="flex h-14 justify-between shadow- fixed top-0 w-[100vw] z-10 bg-white">
      <div className="space-x-6 flex ml-6 self-center">
        <button
          className="hover:bg-gray-300 p-2 rounded-full"
          onClick={toggleSideBarHandler}
        >
          <img
            className="h-5 self-center  "
            src={hamburgerIcon}
            alt="Hamburger icon"
          ></img>
        </button>

        <div className="flex mt-1">
          <img
            className="h-8 bg-transparent bg-white"
            src={youtubeLogo}
            alt="youtube logo"
          ></img>

          <h1 className="font-bold text-xl ml-1">YouTube</h1>
        </div>
      </div>

      <div className="space-x-4 hidden sm:flex">
        <div className="flex self-center">
          <input
            className="border border-black/50 rounded-l-3xl px-4 py-1 h-10 w-[40vw] text-base outline-none   focus:border-blue-900"
            type="text"
            placeholder="Search"
          ></input>

          <button className="border border-black/50 border-l-white px-6 py-1 rounded-r-3xl h-10">
            <img className="h-4" src={searchIcon} alt="search icon"></img>
          </button>
        </div>

        <button className="self-center bg-gray-100 rounded-full p-2">
          <img className="h-5 " src={mikeIcon} alt="voice"></img>
        </button>
      </div>

      <div className="flex space-x-6 mr-8">
        <img
          className="h-5 self-center"
          src={notificationIcon}
          alt="notification icon"
        ></img>
        <img className="h-7 self-center" src={userIcon} alt="user icon"></img>
      </div>
    </header>
  );
}

export default Header;
