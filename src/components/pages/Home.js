import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <h1>Life Time checker</h1>
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
  );
};

export default Home;
