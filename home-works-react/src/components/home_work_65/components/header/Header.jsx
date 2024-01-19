import "./css/header.css";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import ShoppingBasketTwoToneIcon from "@mui/icons-material/ShoppingBasketTwoTone";

export function Header() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo col-3">
          <StoreTwoToneIcon fontSize="large" />
        </div>
        <div className="navbar-menu col-9">
          <nav className="nav justify-content-between">
            <div className="nav-navigation d-flex">
              <a className="nav-link active" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Delivery and Payments
              </a>
              <a className="nav-link" href="#">
                Catalog
              </a>
            </div>
            <div className="nav-basket">
              <a className="nav-link" href="#">
                <ShoppingBasketTwoToneIcon fontSize="large" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
