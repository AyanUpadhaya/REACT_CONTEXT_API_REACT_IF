import { createBrowserRouter } from "react-router-dom";
import { Postloader, SinglePostLoader } from "../utils/Loaders";
import Website from "../layouts/website/Website";
import Home from "../pages/website/home/Home";
import About from "../pages/website/about/About";
import ErrorPage from "../pages/website/error/ErrorPage";
import Details from "../pages/website/details/Details";
import Posts from "../pages/website/posts/Posts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Website></Website>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,

        children: [
          { path: "", loader: Postloader, element: <Posts></Posts> },
          {
            path: "post/:id",
            element: <Details></Details>,
            loader: ({ params }) => SinglePostLoader(params.id),
          },
        ],
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    element: <h2 className="fw-bold text-center">Page Not Found!</h2>,
  },
]);

export default router;
