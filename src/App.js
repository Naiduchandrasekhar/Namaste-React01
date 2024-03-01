import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact"
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import ThemeContext from "./utils/ThemeContext";

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {

  const [themeMode, setThemeMode] = useState(false)

  return (
    <ThemeContext.Provider value={{mode:themeMode, setThemeMode}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </ThemeContext.Provider>
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback="Loading..."><Grocery /></Suspense>,
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
