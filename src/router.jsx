import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./Layout/DashboardLayout";
import Signup from './Signup/Signup'
const Router = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
