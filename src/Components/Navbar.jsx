import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/react-routing-3.2/">Home</Link>
      <Link to="/react-routing-3.2/api">Api</Link>
      <Link to="/react-routing-3.2/profile">Profile</Link>
      <Link to="/react-routing-3.2/component">Component</Link>
    </div>
  );
}

export default Navbar;
