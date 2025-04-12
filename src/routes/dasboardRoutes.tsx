import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/dashboard";
import Publications from "../pages/dashboard/pulication";
import Research from "../pages/dashboard/research";
import Donations from "../pages/dashboard/danation";
import Help from "../pages/dashboard/help";

const DashboardRoutes = () => (
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route path="/index" element={<Dashboard />} />
    <Route path="/publications" element={<Publications />} />
    <Route path="/research" element={<Research />} />
    <Route path="/donations" element={<Donations />} />
    <Route path="/help" element={<Help />} />
  </Route>
);

export default DashboardRoutes;
