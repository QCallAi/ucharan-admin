import {
  PiUserList,
  PiPencilSimpleBold,
  PiSealQuestionDuotone,
} from "react-icons/pi";
import UserList from "views/admin/userList";
import { IoMdSettings } from "react-icons/io";
import Login from "views/auth/logIn";
import QuestionForm from "views/questions";
import CreateSession from "views/session/create-session";
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
    name: "Create Lesson",
    layout: "/admin",
    path: "create-lesson",
    icon: <PiPencilSimpleBold className="h-6 w-6" />,
    component: <CreateSession />,
    sidebar: true,
  },
  {
    name: "Add Questions",
    layout: "/admin",
    path: "add-questions",
    icon: <PiSealQuestionDuotone className="h-6 w-6" />,
    component: <QuestionForm />,
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
