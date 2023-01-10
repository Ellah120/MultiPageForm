import './home.css';
import Sidebar from "./Components/Sidebar";
// import Form from "./Components/Form";
import PlanMonthly from './Components/PlanMonthly';
import {FaToggleOff} from 'react-icons/fa'; 
function Home() {
  return (
    <div className="main">
     <Sidebar />
     < PlanMonthly arcade='$9/mo' advanced='$12/mo' pro='$15/mo' toggle={<FaToggleOff style={{paddingLeft: '10px', paddingRight:'10px', width:'50px',}}/>} />
    </div>
  )
}

export default Home;