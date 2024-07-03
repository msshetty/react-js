import {BrowserRouter as Router,Link,useLocation} from 'react-router-dom' 
const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className='container'>
                <Link className="navbar-brand" to="/">React App</Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                Menu <span className="caret"></span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/products" className="dropdown-item">Products</Link>
                                <Link to="" className="dropdown-item"> Products</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </nav>
    );
};
export default Header;