import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main/Main";
import store from "./utils/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import PlayingVideoCard from "./components/main/PlayingVideoCard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <Main /> },
      { path: "watch", element: <PlayingVideoCard /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col">
        <Header />
        <RouterProvider router={appRouter} />
        {/* <Body /> */}
      </div>
    </Provider>
  );
}

export default App;
