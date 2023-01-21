import Button from "../Button/button";
import "./finish.css";
function Finish(props) {
  return (
    <div className="finish-div">
      <h1 className="finish-header">Finishing up</h1>
      <p className="main-p">
        Double-check everything looks OK before confirming.
      </p>
      <div className="map-div">
        <div className="finishplan">
          <span className="finish-miniheader">
            Arcade({props.miniheaderprop})
          </span>
          <span className="finish-minispan">$9/mo</span>
        </div>
        <span className="finish-changespan">{props.change}</span>
        <hr />
        <div className="finish-addonsone">
          <p className="finish-addonspone">Online service</p>
          <p className="finish-addonsptwo">$1/mo</p>
        </div>
        <div className="finish-addonstwo">
          <p className="finish-addonspthree">Larger storage</p>
          <p className="finish-addonspfour">$2/mo</p>
        </div>
      </div>
      <div className="finish-addonslast">
        <p className="last-p">Total(per {props.finishvalue}) </p>
        <p className="finish-sum">{props.sum}</p>
      </div>
      <Button
        back="/addonsmonthly"
        next="/thankyou"
        previous="Go Back"
        steps="Confirm"
        styles={{ marginTop: "20px" }}
        bgcolor={{ backgroundColor: "hsl(243, 100%, 62%)" }}
      />
    </div>
  );
}

export default Finish;
