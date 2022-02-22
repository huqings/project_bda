import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/desktop/dashboard";
import User from "../pages/desktop/dashboard/pages/user";
import Bicycle from "../pages/desktop/dashboard/pages/bicycle";
import Site from "../pages/desktop/dashboard/pages/site";
import Operation from "../pages/desktop/dashboard/pages/operation";

export default function routers() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/bicycle" element={<Bicycle />} />
      <Route path="/site" element={<Site />} />
      <Route path="/operation" element={<Operation />} />
    </Routes>
  );
}
