import AddonsMonthly from "../AddonsMonthly";
function AddonsYearly(){
  return(
    <>
    <AddonsMonthly onlines='+$10/yr' storage='+$20/yr'/>
    </>
  )
}

export default AddonsYearly;