import { Component } from "react";
import "./index.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="/" className="logo">
            MockInterview AI
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/history">History</a>
            </li>
          </ul>

          {/* CTA Button (Desktop) */}
          <a href="/start" className="btn">
            Start Interview
          </a>

          {/* Hamburger Icon (Mobile) */}
          <div className="hamburger" onClick={this.toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        {this.state.isOpen && (
          <div className="mobile-menu">
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/dashboard">Dashboard</a>
            <a href="/history">History</a>
            <a href="/start" className="btn mobile-btn">
              Start Interview
            </a>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
