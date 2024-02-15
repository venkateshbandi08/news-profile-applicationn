import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; 
import { Container, Nav, Navbar } from 'react-bootstrap'; 
import { FaUser, FaCog } from 'react-icons/fa'; // importing font-awsome icons

const Header = () => (
  <Navbar expand="lg" className="bg-body-tertiary" fixed='top'> {/* making nav-bar to fix at the top of the page */}
    <Container>
      <Link to='/' style={{textDecoration:'none'}}>
      <Navbar.Brand className='brand-hover' style={{ border: '1px solid red', paddingLeft: '5px', paddingRight:'5px', borderRadius: '3px' }}>The Bharat News</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to='/profile' className="nav-link brand-hover">
            <FaUser /> Profile
          </Link>
          <Link to='/settings' className="nav-link brand-hover">
            <FaCog /> Settings
          </Link>
        </Nav>
      </Navbar.Collapse> 
    </Container>
  </Navbar>
);

export default Header;
