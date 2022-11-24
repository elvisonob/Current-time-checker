import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="body">
      <div className="homepage">
        <div className="subhomepage">
          <h2>Current time checker</h2>
          <nav>
            <ul>
              <Link style={{ textDecoration: 'none' }} to="/london">
                <li>London</li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/paris">
                <li>Paris</li>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/rome">
                <li>Rome</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Home;
