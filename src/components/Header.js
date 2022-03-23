import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact to = '/bookdetail'>
        <h3>BookDetail</h3>

      </NavLink>

      <NavLink exact to = '/booklist'>
        <h3>Booklist</h3>
      </NavLink>
    </div>
  );
}