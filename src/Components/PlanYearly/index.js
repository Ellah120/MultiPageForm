import PlanMonthly from '../PlanMonthly';
import {FaToggleOn} from 'react-icons/fa';
function PlanYearly(){
 return(
<div>
  < PlanMonthly arcade='$90/mo' advanced='$120/mo' pro='$150/mo' freespan='2 months free' toggle={<FaToggleOn style={{paddingLeft: '10px', paddingRight:'10px', width:'50px',}}/>} />
  </div>
 ) 
}

export default PlanYearly;