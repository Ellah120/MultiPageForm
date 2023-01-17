import './button.css';
function Button(props){
  return (
    <div className="button-div">
       <button className='button-one'>{props.back}</button>
   <button className='button-two'>{props.next}</button>
    </div>
  )
}

export default Button;