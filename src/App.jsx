import HomePage from "./pages/homePage/HomePage.jsx";
import Layout from "./pages/layout/Layout.jsx";
import ListPage from "./pages/listPage/ListPage.jsx";
import SinglePage from "./pages/singlePage/SinglePage.jsx";
import ProfilePage from "./pages/profilePage/ProfilePage.jsx";

import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom"

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
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
      ]
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App