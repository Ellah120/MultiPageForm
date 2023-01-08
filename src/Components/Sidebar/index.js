import bgDesktop from './bgDesktop.svg';
import './sidebar.css';
function Sidebar() {
  return (
    <div className="sidebar" style={{backgroundImage: `url(${bgDesktop})`, backgroundSize: '250px' , backgroundRepeat: 'no-repeat', width: '500px', height: '800px'}}>
    <div className='one'>
      <p className='numOne'>1</p>
      <p className='stepOne'> <span>STEP 1 </span><br />YOUR INFO</p>
    </div>
    <div className='two'>
      <p className='numTwo'>2</p>
      <p className='stepTwo'><span>STEP 2 </span><br />SELECT PLAN</p>
    </div>
    <div className='three'>
      <p className='numThree'>3</p>
      <p className='stepThree'><span>STEP 3 </span><br />ADD-ONS</p>
    </div>
    <div className='four'>
      <p className='numFour'>4</p>
      <p className='stepFour'><span>STEP 4 </span><br />SUMMARY</p>
    </div>
    </div>
  )
}

export default Sidebar;