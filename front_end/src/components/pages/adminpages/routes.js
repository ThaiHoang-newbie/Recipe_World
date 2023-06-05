import Posts from "./UI/Posts";
import Users from "./UI/Users";
import Content from "./parts/Content";

export const routes = [
  {
    path: '/',
    index: true,
    element: <Content />
  },
  {
    path: '/users',
    index: false,
    element: <Users />
  },
  {
    path: '/posts',
    index: false,
    element: <Posts />
  },
]