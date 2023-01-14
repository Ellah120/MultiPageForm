import './form.css';
import { useState } from "react";
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
  <h1>Personal info</h1>
  <p>Please provide your name, email address and phone number.</p>
  <form onSubmit={formHandler}>
    <label htmlFor="name">Name</label>
    <input type="text" id='name' value={name} onChange={nameHandler} placeholder='   e.g. Stephen King' />
    <label htmlFor="email">Email Address</label>
    <input type="email" id='email' value={email} onChange={emailHandler} placeholder='   e.g. stephenking@lorem.com' />
    <label htmlFor="number">Phone Number</label>
    <input type="tel" id='number' value={phoneNum} onChange={numberHandler} placeholder='   e.g. +1 234 567 890' />
    <button>Next Step</button>
  </form>
  </div>
)
}

export default Form;