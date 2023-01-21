import PlanMonthly from "../PlanMonthly";
import { FaToggleOn } from "react-icons/fa";
import { Link } from "react-router-dom";
function PlanYearly() {
  return (
    <div>
      <PlanMonthly
        arcade="$90/yr"
        advanced="$120/yr"
        pro="$150/yr"
        freespan="2 months free"
        togglelink={
          <Link to="/planmonthly">
            {
              <FaToggleOn
                style={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  width: "50px",
                  color: "blue",
                }}
              />
            }
          </Link>
        }
        buttonnext="/addonsyearly"
        buttonback="/"
      />
    </div>
  );
}

export default PlanYearly;
