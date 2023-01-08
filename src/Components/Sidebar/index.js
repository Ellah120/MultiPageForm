import bgDesktop from './bgDesktop.svg';

function Sidebar() {
  return (
    <div className="sidebar" style={{backgroundImage: `url(${bgDesktop})`, backgroundSize: '250px' , backgroundRepeat: 'no-repeat', width: '500px', height: '800px'}}>
    <div className='one'>
      <p className='numOne'>1</p>
      <p className='stepOne'>STEP 1 <br /><span>YOUR INFO</span></p>
    </div>
    <div className='two'>
      <p className='numTwo'>2</p>
      <p className='stepTwo'>STEP 2 <br /><span>SELECT PLAN</span></p>
    </div>
    <div className='three'>
      <p className='numThree'>3</p>
      <p className='stepThree'>STEP 3 <br /><span>ADD-ONS</span></p>
    </div>
    <div className='four'>
      <p className='numFour'>4</p>
      <p className='stepFour'>STEP 4 <br /><span>SUMMARY</span></p>
    </div>
    </div>
  )
}

export default Sidebar;