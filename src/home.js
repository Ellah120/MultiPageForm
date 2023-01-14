import './home.css';
import Sidebar from "./Components/Sidebar";
// import AddonsMonthly from './Components/AddonsMonthly';
// import AddonsYearly from './Components/AddonsYearly';
import ThankYou from './Components/ThankYou';
// import Form from "./Components/Form";
// import PlanMonthly from './Components/PlanMonthly';
// import {FaToggleOff} from 'react-icons/fa'; 
// import PlanYearly from './Components/PlanYearly';
function Home() {
  return (
    <div className="main">
     <Sidebar />
     {/* < PlanMonthly arcade='$9/mo' advanced='$12/mo' pro='$15/mo' toggle={<FaToggleOff style={{paddingLeft: '10px', paddingRight:'10px', width:'50px',}}/>} /> */}
     {/* <PlanYearly /> */}
     {/* <Addons onlines='+$1/mo' storage='+$2/mo'/> */}
     {/* <AddonsYearly /> */}
     {/* <Form /> */}
     <ThankYou />
    </div>
  )
}

export default Home;