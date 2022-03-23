import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Main() {
  return (
    <div>
      <NavLink exact to = '/books'>
        <h3>See the List!</h3>
      </NavLink>
    </div>
  );
}
