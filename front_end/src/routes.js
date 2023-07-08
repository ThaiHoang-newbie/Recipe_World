import Home from "./Components/pages/homepage/Home";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Users from "./Components/pages/adminpages/UI/Users";
import Posts from "./Components/pages/adminpages/UI/Posts";
import Categories from "./Components/pages/adminpages/UI/Categories";
import Recipe from "./Components/Recipe/Recipe";
import UserInfor from "./Components/UserInfor/UserInfor";
import EditUserInfor from "./Components/UserInfor/EditUserInfor";
import BlogPosts from "./Components/Blogposts/BlogPosts";
import Admin from "./Components/pages/adminpages/Admin";
import Content from "./Components/pages/adminpages/parts/Content";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import NewPass from "./Components/ForgotPass/NewPass";
import PostRecipe from "./Components/Posting/PostRecipe";
import EditPost from "./Components/Posting/EditPost";
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
    path: "/post-recipe",
    index: false,
    element: <PostRecipe />,
  },
  {
    path: "/edit-recipe",
    index: false,
    element: <EditPost />,
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
