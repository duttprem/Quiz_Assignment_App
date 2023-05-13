import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
       The <span>Daily</span>  General <span>Q</span> 
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
