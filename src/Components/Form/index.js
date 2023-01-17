import './form.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('');

  function formHandler(event){
 event.preventDefault()
  }

  function nameHandler (event){
    setName(event.target.value);
  }

  function emailHandler (event) {
    setEmail(event.target.value);
  }

  function numberHandler(event){
    setPhoneNum(event.target.value);
  }
return (
  <div className="form">
  <h1 className='form-header'>Personal info</h1>
  <p className='form-p'>Please provide your name, email address and phone number.</p>
  <form onSubmit={formHandler} className='main-form'>
    <label htmlFor="name" className='form-label'>Name</label>
    <input type="text" id='name' value={name} onChange={nameHandler} placeholder='   e.g. Stephen King' className='form-input'/>
    <label htmlFor="email" className='form-label'>Email Address</label>
    <input type="email" id='email' value={email} onChange={emailHandler} placeholder='   e.g. stephenking@lorem.com' className='form-input'/>
    <label htmlFor="number" className='form-label'>Phone Number</label>
    <input type="tel" id='number' value={phoneNum} onChange={numberHandler} placeholder='   e.g. +1 234 567 890' className='form-input'/>
    <button className='form-button'><Link to='/planmonthly' style={{color:'hsl(0, 0%, 100%)', textDecoration: 'none',}}>Next Step</Link></button>
  </form>
  </div>
)
}

export default Form;