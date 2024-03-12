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
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {

  const [themeMode, setThemeMode] = useState(false)

  return (
    <Provider store={appStore}>
    <ThemeContext.Provider value={{mode:themeMode, setThemeMode}}>
    <div className="app">
      <Header />
      <ToastContainer 
      position="top-center"
      autoClose={1000}
      theme={themeMode ? "dark": "light"}
      hideProgressBar
      pauseOnHover={false}
      />
      <Outlet />
    </div>
    </ThemeContext.Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
