import React, { lazy } from "react";
import "./app.css";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Errorpage from "./component/Errorpage";
import ContactUs from "./component/contact-us";
import ResturantMenu from "./component/resturantMenu";
import Profile from './component/ProfileClass';
import { ProviderData } from "./context-api/UserContextData";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
const Footer = lazy(() => import("./component/Footer"))
import store from './utils/store';
import Cart from './component/cart/cart';

const AppLayout = () => {
  return (
    <>
    <Provider store={store}>
    <ProviderData>
      <Toaster/>
        <Header />
        <Outlet />
        <Footer />

      </ProviderData>
      
    </Provider>
   

    </>
  );
};

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about-us",
        element: <About />,
        children: [{
          path: "profile",
          element: <Profile />
        }]
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/resturantmenu/:id",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={mainRouter} />);
