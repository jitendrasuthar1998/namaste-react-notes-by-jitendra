import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Contact from "./components/Contact";
// import Error from "./components/Error";
// import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer/Shimmer";
// import Grocery from "./components/Grocery";

//Lazy loading
// On demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About/About"));
const Cart = lazy(() => import("./components/Cart"));
const Contact = lazy(() => import("./components/Contact"));
const Error = lazy(() => import("./components/Error"));

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// creating routing configuration

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Shimmer />}><Contact /></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Suspense fallback={<Shimmer />}><Error /></Suspense>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
