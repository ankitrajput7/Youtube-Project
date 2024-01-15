import creatorProfile from "../../assets/user.png";
import verifiedIcon from "../../assets/check-mark.png";
import { useNavigate } from "react-router-dom";

function VideoCard({ videoInfo }) {
  const navigate = useNavigate();
  const { snippet, statistics, id } = videoInfo;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div
      className="w-full md:w-[35vw] lg:w-[29vw] cursor-pointer"
      onClick={() => navigate(`/watch?id=${id}`)}
    >
      <img
        className="h-48 sm:h-48 w-full object-cover mb-3 rounded-md self-center"
        src={thumbnails?.standard?.url}
        alt="poster"
      ></img>

      <div className="flex space-x-3">
        <img className="h-8" src={creatorProfile} alt="creator profile"></img>
        <div className="flex flex-col space-y-1">
          <h2 className="font-semibold text-base">{title}</h2>

          <div className="flex space-x-2 text-sm">
            <p>{channelTitle}</p>{" "}
            <img
              className="h-3 self-center"
              src={verifiedIcon}
              alt="verified icon"
            ></img>
          </div>

          <p className="text-sm">
            {statistics.viewCount} views . {snippet.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
