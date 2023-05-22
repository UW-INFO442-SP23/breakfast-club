import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

  return (
    <div className="navbar-container">
      <div className="topNav">
      <img src="./breakfast-club/img/icon_vegetables.png" alt="tomato and cucumber logo"></img>
        <Link to="/breakfast-club" className="site-title">Nourished Kings</Link>
      </div>
      <nav className="nav">
        <ul>
          <CustomLink to="/breakfast-club">Home</CustomLink>
          <CustomLink to="/about">About Us</CustomLink>
          <CustomLink to="/catalog">Food Catalog</CustomLink>
          <CustomLink to="/meals">Meals</CustomLink>
          <CustomLink to="/guidelines">Guidelines</CustomLink>
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

