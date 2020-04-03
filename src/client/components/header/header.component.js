import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from '../../images/logo.png'
class Header extends React.Component {
  render() {
    // If we used Link tag then react router will work but we dont need that here, because we need to redirect to page.
    const authButton = this.props.authStatus ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )
    return (
        <div className="header">
          <a  href="#">
            <img src={Logo} alt="Hacker News"/>
          </a>
          <Link to="/">new</Link>|
          <Link to="/users">past</Link>|
          <Link to="/admins">comments</Link>|
          <Link to="/admins">ask</Link>|
          <Link to="/admins">show</Link>|
          <Link to="/admins">jobs</Link>|c
          <Link to="/admins">submit</Link>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  authStatus: state.authStatus
});

export default connect(mapStateToProps)(Header);
