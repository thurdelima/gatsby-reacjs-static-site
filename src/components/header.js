import  React, {Component} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }))
  }

  closeMenu = () => {
    this.setState({isMenuOpen: false});
  }
  
  render = () => {
    const {siteTitle} = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? `is-active`:'';


    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item is-size-4" href="https://bulma.io">
            {siteTitle}
          </a>

          <a role="button" onClick={this.handleMenu} className={`navbar-burger ${burgerClass}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            <Link 
              to="/"
              onClick={this.closeMenu}
              className="navbar-item">
              Home
            </Link>

            <Link onClick={this.closeMenu}  to="/projects" className="navbar-item">
              Projects
            </Link>

            <Link onClick={this.closeMenu}  to="/blog" className="navbar-item">
              Blog
            </Link>

            
          </div>

         
        </div>
      </nav>
    )
  }
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Arthur Lima`,
}

export default Header
