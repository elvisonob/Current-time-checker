import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const navigation = () => {
    history.push('/');
  };

  return (
    <div>
      <div className="header">
        <h1 className="logo" onClick={navigation}>
          Home
        </h1>
        <nav>
          <ul>
            <NavLink
              style={{ textDecoration: 'none' }}
              activeClassName="active"
              to="/london"
            >
              <li>London Time</li>
            </NavLink>
            <NavLink
              style={{ textDecoration: 'none' }}
              activeClassName="active"
              to="/paris"
            >
              <li>Paris Time</li>
            </NavLink>
            <NavLink
              style={{ textDecoration: 'none' }}
              activeClassName="active"
              to="/rome"
            >
              <li>Rome Timesss</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
