import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="bg-ak_primary page404">
      <div>
        <h1>Page not found...</h1>
        <p className="d-flex gap-2">
          <span>go to</span>
          <Link className="text-white" to="/">
            Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page404;
