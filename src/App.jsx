import HomePage from "./pages/homePage/HomePage.jsx";
import { Layout, RequireAuth } from "./pages/layout/Layout.jsx";
import ListPage from "./pages/listPage/ListPage.jsx";
import SinglePage from "./pages/singlePage/SinglePage.jsx";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import ProfileUpdatePage from "./pages/profileUpdatePage/ProfileUpdatePage.jsx";
import NewPostPage from "./pages/newPostPage/NewPostPage.jsx";
import { listPageLoader, singlePageLoader } from "./lib/loaders.js";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },

        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/register",
          element: <RegisterPage />
        },
      ]
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App