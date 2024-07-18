import { Link } from "react-router-dom";

function NavigationLink({ icon, destination }) {
  return (
    <Link to={destination}>
      <div className="navigationlink__wrapper">
        <img src={icon} />
      </div>
    </Link>
  );
}

export default NavigationLink;
