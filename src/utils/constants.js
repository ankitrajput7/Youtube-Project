import homeIcon from "../assets/house-black-silhouette-without-door.png";
import shortIcon from "../assets/video.png";
import subscriptionIcon from "../assets/subscribe.png";
import libraryIcon from "../assets/library.png";
import historyIcon from "../assets/history.png";
import watchLaterIcon from "../assets/clock.png";
import likeIcon from "../assets/like.png";
import trendingIcon from "../assets/trending-topic.png";
import shoppingIcon from "../assets/shopping-bag.png";
import musicIcon from "../assets/musical-note.png";
import movieIcon from "../assets/video-icon.png";
import liveIcon from "../assets/live.png";
import GamingIcon from "../assets/console.png";
import sportsIcon from "../assets/trophy.png";
import fasionIcon from "../assets/clothes-hanger.png";

export let sideBarButtonList = [
  {
    iconName: "Home",
    icon: homeIcon,
    route: "/",
  },
  {
    iconName: "Shorts",
    icon: shortIcon,
    route: "/",
  },
  {
    iconName: "Subscription",
    icon: subscriptionIcon,
    route: "/",
  },
  {
    iconName: "Library",
    icon: libraryIcon,
    route: "/",
  },
  {
    iconName: "History",
    icon: historyIcon,
    route: "/",
  },
  {
    iconName: "Watch Later",
    icon: watchLaterIcon,
    route: "/",
  },
  {
    iconName: "Liked Videos",
    icon: likeIcon,
    route: "/",
  },
  {
    iconName: "Trending",
    icon: trendingIcon,
    route: "/",
  },
  {
    iconName: "Shopping",
    icon: shoppingIcon,
    route: "/",
  },
  {
    iconName: "Music",
    icon: musicIcon,
    route: "/",
  },
  {
    iconName: "Movies",
    icon: movieIcon,
    route: "/",
  },
  {
    iconName: "Live",
    icon: liveIcon,
    route: "/",
  },

  {
    iconName: "Fasion",
    icon: fasionIcon,
    route: "/",
  },
  {
    iconName: "Sports",
    icon: sportsIcon,
  },
  {
    iconName: "Gaming",
    icon: GamingIcon,
    route: "/",
  },
];

export const videosApiUrl =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyATbFhuZ_Mx9laCPEqNAoN1UP6TczZ0I_k";
