import { useState } from "react";
import './addons.css';
function AddonsMonthly(props) {
  const [checked, setChecked] = useState(false);
  function checkHandler(){
    setChecked(!checked);
  }
  return (
    <div className="add-ons">
    <h1>Pick add-ons</h1>
    <p>Add-ons help enhance your gaming experience.</p>
    <form action="">
      <label htmlFor="onlineService">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="onlineService"/>
       <h4 className="online"> Online service </h4>
       <span className="span-grey">Access to multiplayer games</span>
       <span className="props-span">{props.onlines}</span>
      </label>
      <label htmlFor="largerStorage">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="largerStorage"/>
       <h4 className="online"> Larger storage </h4>
       <span className="span-grey">Extra 1TB of cloud save</span>
       <span className="props-span">{props.storage}</span>
      </label>
      <label htmlFor="profile">
      <input type="checkbox" value={checked} onChange={checkHandler} name='service' id="profile"/>
       <h4 className="online"> Customizable profile </h4>
       <span className="span-grey">Custom theme on your profile</span>
       <span className="props-span">{props.storage}</span>
      </label>
      <button className='btn-one'>Go Back</button>
   <button className='btn-two'>Next Step</button>
    </form>
    </div>
  )
}
export default AddonsMonthly;