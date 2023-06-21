import Home from "./Components/pages/homepage/Home";
import Contact from "./Components/Contact/Contact"
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Content from "./Components/pages/adminpages/parts/Content"
import Users from "./Components/pages/adminpages/UI/Users"
import Posts from "./Components/pages/adminpages/UI/Posts"
import Categories from "./Components/pages/adminpages/UI/Categories"
import Recipe from "./Components/Recipe/Recipe";

export const homepageRoutes = [
  {
    path: '/',
    index: true,
    element: <Home />
  },
  {
    path: '/sign-up',
    index: false,
    element: <Register />
  },
  {
    path: '/sign-in',
    index: false,
    element: <Login />
  },
  {
    path: '/contact',
    index: false,
    element: <Contact />
  },
  {
    path: '/recipe/:id',
    index: false,
    element: <Recipe />
  }
]

export const adminPageRoutes = [
  {
    path: "/admin",
    index: true,
    element: <Content />
  },
  {
    path: "/users",
    index: true,
    element: <Users />
  },
  {
    path: "/posts",
    index: true,
    element: <Posts />
  },
  {
    path: "/categories",
    index: true,
    element: <Categories />
  },
]