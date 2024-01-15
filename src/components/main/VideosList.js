import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { videosApiUrl } from "../../utils/constants";

function VideosList() {
  const sidebarState = useSelector((state) => state.app.sideMenuState);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      console.log("api called.");
      const { data } = await axios(videosApiUrl);
      setVideoList(data?.items);
    }

    fetchVideos();
  }, []);

  return (
    <div
      className={`mt-14 grid  gap-y-8 gap-x-5 grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 ${
        sidebarState && "fixed left-[8vw] justify-between"
      }`}
    >
      {videoList.map((video) => {
        return <VideoCard key={video.id} videoInfo={video} />;
      })}
    </div>
  );
}

export default VideosList;
