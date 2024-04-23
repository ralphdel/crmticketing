import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./Layout/DashboardLayout";
import Signup from './Signup/Signup'
import TicketForm from "./pages/ticketform/Ticketform.jsx";
const Router = () => {
  return (
    <BrowserRouter>
      <Dashboard/>
      <Routes>
        <Route path="/tickets"   element={<TicketForm/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
