import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/operations">Operations</NavLink>
          <NavLink to="/table">Table</NavLink>
       </div>
    );
}
 
export default Navigation;
