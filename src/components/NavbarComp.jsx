import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUtensils  } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function NavbarComp() {
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart)

  const movePage = (path) => {
    navigate(path);
  };

  const checkLogin = () => {
    if (localStorage.getItem('userLogin')) {
      return true
    } else {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('userLogin')
    localStorage.removeItem('userLoginID')
    window.location.reload()
  }

  return (
    <Navbar collapseOnSelect expand="lg" >
      <FontAwesomeIcon icon={faUtensils } style={{ marginLeft: '5px' }}/>
      <Navbar.Brand onClick={() => movePage("/")} style={{ cursor: "pointer" }} ><strong>FooS.</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={() => movePage("/")}>Beranda</Nav.Link>
          <Nav.Link onClick={() => movePage("/menu")}>Menu</Nav.Link>
        </Nav>
        {
          checkLogin()
          ? <Nav>
              <Nav.Link onClick={() => movePage("/cart")}>
                  {cart?.length ? cart?.length : ''}
                <FontAwesomeIcon icon={faCartShopping } style={{ marginLeft: '5px' }}  />
              </Nav.Link>
              <Nav.Link onClick={() => logout()}>Keluar</Nav.Link>
            </Nav>
          : <Nav>
              <Nav.Link onClick={() => movePage("/cart")}>
                {cart?.length ? cart?.length : '' }
                <FontAwesomeIcon icon={faCartShopping } style={{ marginLeft: '5px' }} />
              </Nav.Link>
              <Nav.Link onClick={() => movePage("/login")}>Masuk</Nav.Link>
              <Nav.Link onClick={() => movePage("/register")}>Daftar</Nav.Link>
            </Nav>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
