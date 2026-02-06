import { useState } from "react";
import Main from "./main/Main";
import Navbar from "./navbar/Navbar";
import Blog from "./blog/Blog";
import Who from "./Who/Who";
import Footer from "./footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Terms from './Terms/Terms';
import Privacy from "./privacy/Privacy";
import BlogDetails from "./detals/page";
import NotFond from "./notfound/NotFond";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {index:true , element:<Main/>},
      { path: "blog", element: <Blog />  },
        { path: "blog/:slug", element: <BlogDetails /> },
      { path: "about", element: <Who /> },
      { path: "terms", element: <Terms /> },
       { path: "privacy", element: <Privacy/> },
       { path: "*", element: <NotFond/> }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
