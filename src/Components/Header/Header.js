import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../../store/Context";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {user ? (
              ` ${user.displayName}`
            ) : (
              <Link style={{color:'black'}} to="/login">
                <span>Login</span>
              </Link>
            )}
          </span>
          <hr />
        </div>
        {user && (
          <span className="logout"
            onClick={() => {
              firebase.auth().signOut();
              history.push("/login");
            }}
          >
            Logout
          </span>
        )}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            {user ? (
              <Link to="/create">
                <SellButtonPlus></SellButtonPlus>
              </Link>
            ) : (
              <Link to="/login">
                <SellButtonPlus></SellButtonPlus>
              </Link>
            )}
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
