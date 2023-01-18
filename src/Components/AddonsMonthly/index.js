import { useState } from "react";
import Button from '../Button/button';
import { Link } from 'react-router-dom';
import './addons.css';
function AddonsMonthly(props) {
  const [checked, setChecked] = useState(false);
  function checkHandler(){
    setChecked(!checked);
  }
  return (
    <div className="add-ons">
    <h1 className="addons-header">Pick add-ons</h1>
    <p className="addons-p">Add-ons help enhance your gaming experience.</p>
    <form action="" className="addons-form">
      <label htmlFor="onlineService" className="onlineService">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="onlineService"/>
       <h4 className="online"> Online service </h4>
       <span className="addons-grey">Access to multiplayer games</span>
       <span className="addons-span">{props.onlines}</span>
      </label>
      <label htmlFor="largerStorage" className="largerStorage">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="largerStorage"/>
       <h4 className="online"> Larger storage </h4>
       <span className="addons-grey">Extra 1TB of cloud save</span>
       <span className="addons-span">{props.storage}</span>
      </label>
      <label htmlFor="profile" className="profile">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="profile"/>
       <h4 className="online"> Customizable profile </h4>
       <span className="addons-grey">Custom theme on your profile</span>
       <span className="addons-span">{props.storage}</span>
      </label>
      <Button back={<Link to='/planmonthly' style={{color:'hsl(231, 11%, 63%)', textDecoration: 'none', backgroundColor: 'hsl(0, 0%, 100%)', fontWeight: '700', border: 'none'}}>Go Back</Link>}  next={<Link to='/finishup' style={{color:'hsl(0, 0%, 100%)', textDecoration: 'none'}}>Next Step</Link>} styles={{marginTop: '40px'}}/>
    </form>
    </div>
  )
}
export default AddonsMonthly;