import { sideBarButtonList } from "../utils/constants";
import { toggleSideMenu } from "../utils/redux/sideMenuSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import hamburgerIcon from "../assets/hamburger (1).png";
import youtubeLogo from "../assets/youtube (1).png";
import { Link } from "react-router-dom";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sideBarState = useSelector((state) => state.app);

  const toggleSideBarHandler = () => {
    dispatch(toggleSideMenu());
  };

  return (
    <>
      {sideBarState.sideIconsState && (
        <div className="hidden md:fixed top-16 mt-4 space-y-8 w-[8vw]  ">
          <button
            className="w-full hover:bg-gray-100 flex flex-col rounded-xl"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              className="h-5 self-center"
              src={sideBarButtonList[0].icon}
              alt="home"
            ></img>

            <p className="text-xs font-normal self-center mt-2">Home</p>
          </button>

          <button className="w-full hover:bg-gray-100 flex flex-col rounded-xl">
            <img
              className="h-5 self-center"
              src={sideBarButtonList[1].icon}
              alt="short"
            ></img>
            <p className="text-xs font-normal self-center mt-2">Shorts</p>
          </button>

          <button className="w-full px-1 hover:bg-gray-100 flex flex-col rounded-xl">
            <img
              className="h-5 self-center"
              src={sideBarButtonList[2].icon}
              alt="subscription"
            ></img>
            <p className="text-xs font-normal self-center mt-2">Subscription</p>
          </button>

          <button className="w-full hover:bg-gray-100 flex flex-col rounded-xl">
            <img
              className="h-5 self-center"
              src={sideBarButtonList[11].icon}
              alt="live"
            ></img>
            <p className="text-xs font-normal self-center mt-2">Live</p>
          </button>

          <button className="w-full hover:bg-gray-100 flex flex-col rounded-xl">
            <img
              className="h-5 self-center"
              src={sideBarButtonList[14].icon}
              alt="gaming"
            ></img>
            <p className="text-xs font-normal self-center mt-2">Gaming</p>
          </button>
        </div>
      )}

      {sideBarState.sideMenuState && (
        <>
          <div
            className="h-full w-[100vw] fixed top-0 left-0 bg-black/30 z-10"
            onClick={toggleSideBarHandler}
          ></div>

          <div className="fixed w-44 sm:w-60 h-[100vh] px-6 md:inline shadow-2xl z-10 bg-white top-0 overflow-scroll">
            <div
              className="space-x-6 flex ml-1 py-[10px] self-center fixed z-10 bg-white"
              onClick={toggleSideBarHandler}
            >
              <button className="hover:bg-gray-300 p-2 rounded-full">
                <img
                  className="h-4 sm:h-5 self-center  "
                  src={hamburgerIcon}
                  alt="Hamburger icon"
                ></img>
              </button>

              <div
                className="flex mt-1 cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                <img
                  className="h-6 sm:h-8 bg-transparent bg-white"
                  src={youtubeLogo}
                  alt="youtube logo"
                ></img>
                <h1 className="font-bold text-base sm:text-xl ml-1">YouTube</h1>
              </div>
            </div>

            <div className="mt-14">
              {sideBarButtonList.map((element) => {
                return (
                  <Link to={element.route} key={element.iconName}>
                    <button className="flex w-full px-2 py-3 hover:bg-gray-200 rounded-lg">
                      <img
                        className="h-5"
                        src={element.icon}
                        alt={element.iconName}
                      ></img>
                      <p className="text-xs sm:text-sm px-6">
                        {element.iconName}
                      </p>
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SideBar;
