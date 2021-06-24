import React from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import "./Header.css";

//New additions below
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <Link to='/checkout'>
      <div className='header__optionBasket'>
        <AddShoppingCartIcon />
        <span className='header__optionLineTwo header__basketCount'>
          {basket?.length}
          <h1>Hi there</h1>
        </span>
      </div>
    </Link>
  );
}

export default Header;
