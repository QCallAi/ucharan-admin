import { PiUserList } from "react-icons/pi";
import UserList from "views/admin/userList";
import { IoMdSettings } from "react-icons/io";
import Login from "views/auth/logIn";
const routes = [
  {
    name: "User List",
    layout: "/admin",
    path: "user-list",
    icon: <PiUserList className="h-6 w-6" />,
    component: <UserList />,
    sidebar: true,
  },
  {
    name: "Login",
    layout: "/auth",
    path: "login",
    icon: <IoMdSettings className="h-6 w-6" />,
    sidebar: false,
    component: <Login />,
  },
];
export default routes;
