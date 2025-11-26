import { PiUserList } from "react-icons/pi";
import UserList from "views/admin/userList";

const routes = [
  {
    name: "User List",
    layout: "/admin",
    path: "user-list",
    icon: <PiUserList className="h-6 w-6" />,
    component: <UserList />,
    sidebar: true,
  },
];
export default routes;
