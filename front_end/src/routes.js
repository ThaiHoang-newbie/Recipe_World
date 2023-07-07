import Home from "./components/pages/homepage/Home";
import Contact from "./components/Contact/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Users from "./components/pages/adminpages/UI/Users";
import Posts from "./components/pages/adminpages/UI/Posts";
import Categories from "./components/pages/adminpages/UI/Categories";
import Recipe from "./components/Recipe/Recipe";
import UserInfor from "./components/UserInfor/UserInfor";
import EditUserInfor from "./components/UserInfor/EditUserInfor";
import Posting from "./components/Posting/Posting";
import BlogPosts from "./components/Blogposts/BlogPosts";
import Admin from "./components/pages/adminpages/Admin";
import Content from "./components/pages/adminpages/parts/Content";
import ForgotPass from "./components/ForgotPass/ForgotPass";
import NewPass from "./components/ForgotPass/NewPass";

export const routes = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/sign-up",
    index: false,
    element: <Register />,
  },
  {
    path: "/sign-in",
    index: false,
    element: <Login />,
  },
  {
    path: "/contact",
    index: false,
    element: <Contact />,
  },
  {
    path: "/all-post",
    index: false,
    element: <BlogPosts />,
  },
  {
    path: "/recipe/:id",
    index: false,
    element: <Recipe />,
  },
  {
    path: "/profile-page/:id",
    index: false,
    element: <UserInfor />,
  },
  {
    path: "/edit-profile",
    index: false,
    element: <EditUserInfor />,
  },
  {
    path: "/posting",
    index: false,
    element: <Posting />,
  },
  {
    path: "/enter-email",
    index: false,
    element: <ForgotPass />,
  },
  {
    path: "/new-pass",
    index: false,
    element: <NewPass />,
  },
  {
    path: "/admin",
    index: false,
    element: <Admin />,
  },
  {
    path: "/admin/users",
    index: true,
    element: <Users />,
  },
  {
    path: "/admin/posts",
    index: true,
    element: <Posts />,
  },
  {
    path: "/admin/categories",
    index: true,
    element: <Categories />,
  },
];
