

import {Link} from "react-router";

const navbar = () => {
    return (
      <nav className="navbar">
          <Link to="/">
              <p className="text-2xl font-bold text-gradient">RESUMEAI</p>
          </Link>
          <Link to="/upload" className="primary-button w-fit">
              Upload Button
          </Link>
      </nav>
    );
};

export default navbar;
