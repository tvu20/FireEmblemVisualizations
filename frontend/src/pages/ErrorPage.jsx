import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

function ErrorPage() {
  return (
    <>
      <div className="error__page-content">
        <h1>Oops! This page doesn't exist.</h1>
        <Link
          to="/"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Return to homepage
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
