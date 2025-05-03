import { Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/dashboard";
import Publications from "../pages/dashboard/publication";
import Research from "../pages/dashboard/research";
import Donations from "../pages/dashboard/danation";
import Help from "../pages/dashboard/help";
import Events from "../pages/dashboard/announcement";
import Team from "../pages/dashboard/team";

const DashboardRoutes = () => (
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route path="/index" element={<Dashboard />} />
    <Route path="/publications" element={<Publications />} />
    <Route path="/research" element={<Research />} />
    <Route path="/donations" element={<Donations />} />
    <Route path="/team" element={<Team />} />
    <Route path="/help" element={<Help />} />
    <Route path="/events" element={<Events />} />

  </Route>
);

export default DashboardRoutes;
