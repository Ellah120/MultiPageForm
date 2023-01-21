import "./button.css";
import { Link } from "react-router-dom";
function Button(props) {
  return (
    <div className="button-div" style={props.styles}>
      <button className="button-one">
        {
          <Link
            to={props.back}
            style={{
              color: "hsl(231, 11%, 63%)",
              textDecoration: "none",
              backgroundColor: "hsl(0, 0%, 100%)",
              fontWeight: "700",
              border: "none",
            }}
          >
            {props.previous}
          </Link>
        }
      </button>
      <button className="button-two" style={props.bgcolor}>
        {
          <Link
            to={props.next}
            style={{ color: "hsl(0, 0%, 100%)", textDecoration: "none" }}
          >
            {props.steps}
          </Link>
        }
      </button>
    </div>
  );
}

export default Button;
