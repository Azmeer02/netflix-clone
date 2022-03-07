import React from "react";
import logo from "../../assets/netflix-3.svg";
import "./index.css";

function Header() {
  return (
    <>
      <div className="navigation">
        <div className="bg">
          <div className="abcd">
            <div className="netflix-logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="nav-body">
              <h2>Unlimited movies, TV</h2>
              <h2>shows, and more.</h2>
              <h3>Watch anywhere. Cancel anytime.</h3>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="sign-in">
              <button>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
