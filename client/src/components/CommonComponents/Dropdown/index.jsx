import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ items }) => {
  return (
    <ul className="sub-menu">
      {items.map((item, index) => (
        <li className="sub-menu__item" key={index}>
          <NavLink to={item.link}>{item.label}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
