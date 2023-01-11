import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/admin/Dashboard";
import People from "../pages/admin/People";
import AddRecord from "../pages/admin/AddRecord";
const authRoutes = [
  { path: "/auth/signin", component: Signin },
  { path: "/auth/signup", component: Signup },
  { path: "/auth/forgot-password", component: ForgotPassword },
];

const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/people", component: People },
  { path: "/admin/addrecords", component: AddRecord },
];
export { authRoutes, adminRoutes };
