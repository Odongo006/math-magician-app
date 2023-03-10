import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, text: 'Home', path: '/math-magician' },
    { id: 2, text: 'Calculator', path: '/calculator' },
    { id: 3, text: 'Quote', path: '/quote' },
  ];
  return (
    <nav className="navbar">
      <header>
        <h1 className="title">Math Magicians</h1>
      </header>
      <ul className="nav-list">
        {
          links.map((path) => (
            <li key={path.id}>
              <NavLink to={path.path}>{ path.text }</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
