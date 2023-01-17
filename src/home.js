import './home.css';
import Sidebar from "./Components/Sidebar";
import {FaToggleOff} from 'react-icons/fa'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddonsMonthly from './Components/AddonsMonthly';
import AddonsYearly from './Components/AddonsYearly';
import Form from './Components/Form';
import ThankYou from './Components/ThankYou';
import PlanMonthly from './Components/PlanMonthly';
import PlanYearly from './Components/PlanYearly';
function Home() {
  return (
    <div className="main">
     <Sidebar />
     <Router>
      <Routes>
        <Route exact path='/' element={<Form/>}/>
        <Route path='/addonsmonthly' element={<AddonsMonthly onlines='+$1/mo' storage='+$2/mo' />}/>
        <Route path='/addonsyearly' element={<AddonsYearly />}/>
        <Route path='/planmonthly' element={<PlanMonthly arcade='$9/mo' advanced='$12/mo' pro='$15/mo' toggle={<FaToggleOff style={{paddingLeft: '10px', paddingRight:'10px', width:'50px',}}/>}/>}/>
        <Route path='/planyearly' element={<PlanYearly />}/>
        <Route path='/thankyou' element={<ThankYou />}/>
      </Routes>
    </Router>

     {/* < PlanMonthly arcade='$9/mo' advanced='$12/mo' pro='$15/mo' toggle={<FaToggleOff style={{paddingLeft: '10px', paddingRight:'10px', width:'50px',}}/>} /> */}
     {/* <PlanYearly /> */}
     {/* <AddonsMonthly onlines='+$1/mo' storage='+$2/mo'/> */}
     {/* <AddonsYearly /> */}
     {/* <Form /> */}
     {/* <ThankYou /> */}
    </div>
  )
}

export default Home;