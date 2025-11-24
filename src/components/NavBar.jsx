import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="w-full bg-gray-950 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto rounded-xl flex gap-6 justify-center text-white text-lg">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/notes">Notes</NavLink>
      </div>
    </div>
  )
}
