import './button.css';
function Button(props){
  return (
    <div className="button-div" style={props.styles}>
       <button className='button-one'>{props.back}</button>
   <button className='button-two' style={props.bgcolor}>{props.next}</button>
    </div>
  )
}

export default Button;