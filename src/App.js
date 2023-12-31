import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useParams,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; //This provider helps us to provide store to our application...(It works like a bridge🌉)
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API call, ssend username and password
    const data = {
      name: "Abhishek P",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
      </UserContext.Provider>
      <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
        <Outlet />
      </UserContext.Provider>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
