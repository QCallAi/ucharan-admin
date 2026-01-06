import {
  PiUserList,
  PiPencilSimpleBold,
  PiSealQuestionDuotone,
} from "react-icons/pi";
import UserList from "views/admin/userList";
import QuestionsPage from "views/admin/questions";
import CreateSession from "views/session/create-session";
import ProtectedRoute from "components/ProtectedRoute";

const routes = [
  {
    name: "User List",
    layout: "/admin",
    path: "user-list",
    icon: <PiUserList className="h-6 w-6" />,
    component: <ProtectedRoute><UserList /></ProtectedRoute>,
    sidebar: true,
  },
  {
    name: "Create Lesson",
    layout: "/admin",
    path: "create-lesson",
    icon: <PiPencilSimpleBold className="h-6 w-6" />,
    component: <ProtectedRoute><CreateSession /></ProtectedRoute>,
    sidebar: true,
  },
  {
    name: "Questions",
    layout: "/admin",
    path: "questions",
    icon: <PiSealQuestionDuotone className="h-6 w-6" />,
    component: <ProtectedRoute><QuestionsPage /></ProtectedRoute>,
    sidebar: true,
  },
];
export default routes;
