import nextIcon from "../../assets/next.png";
import previousIcon from "../../assets/left.png";

function FilterButtons() {
  let buttonList = [
    "Mixes",
    "Javascript",
    "Drama",
    "Music",
    "Movie",
    "Gaming",
    "Live",
    "B Praak",
    "Arijit Singh",
    "Hindi Cinema",
    "tamil Cinema",
    "Bengali Music",
    // "Programming",
    "React",
  ];

  return (
    <div className="w-full md:flex space-x-3 hidden fixed top-14 py-2 bg-white ">
      <button className="bg-gray-200 text-sm font-medium px-2  rounded-lg hover:bg-gray-300 h-8 self-center">
        All
      </button>

      {buttonList.map((element) => {
        return (
          <button
            className="bg-gray-200 text-sm font-medium px-2  rounded-lg hover:bg-gray-300 h-8 self-center"
            key={element}
          >
            {element}
          </button>
        );
      })}

      <button className="hover:bg-gray-300 rounded-full p-2 self-center">
        <img className="h-6" src={nextIcon} alt="next icon"></img>
      </button>
    </div>
  );
}

export default FilterButtons;
