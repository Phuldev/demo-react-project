import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    let date = new Date();
        date = date.getFullYear();
  return (
    <div className="p-3 text-center bg-light">
      <p className="mb-0">© {date} All Rights Reserved <Link className="text-dark pointer text-decoration-none text-capitalize" to="https://phuldevmandal.com.np/">phuldev Mandal</Link></p>
    </div>
  );
};

export default Footer;
