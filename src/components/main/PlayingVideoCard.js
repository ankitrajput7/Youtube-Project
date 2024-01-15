import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSideIcons, openSideIcons } from "../../utils/redux/sideMenuSlice";

function PlayingVideoCard() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideIcons());

    return () => {
      console.log("side icon open")
      dispatch(openSideIcons());
    };
  }, []);

  return (
    <div className="p-8 mt-10">
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${searchParams.get("id")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default PlayingVideoCard;
