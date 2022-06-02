import React from "react";

function Header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            React Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Repository</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export { Header };
