import { Outlet } from "react-router-dom"
import TopBar from "../components/Topbar/Topbar"
import Sidebar from "../components/sidebar/Sidebar"
import "./Dashboardlayout.css"
import TicketForm from "../pages/ticketform/Ticketform"

const Dashboard=()=>{

  return(
    <div id='Dashboardwrap'>
      <div>
        <Sidebar/>
      </div>
      <div>
        <TopBar/>
        <div>
        <TicketForm/>
        </div>
        
      </div>


    </div>
  )
}


export default Dashboard