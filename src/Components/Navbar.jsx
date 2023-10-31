import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/api">Api</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/component">Component</Link>
    </div>
  );
}

export default Navbar;
