import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="navbar-container">
      <div className="topNav">
        <Link to="/" className="site-title">Nourished Kings</Link>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink to="/About">About Us</CustomLink>
          <CustomLink to="/Catalog">Food Catalog</CustomLink>
          <CustomLink to="/Meals">Meals</CustomLink>
          <CustomLink to="/Guidelines">Guidelines</CustomLink>
        </ul>
      </nav>
    </div>
  )
}

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

