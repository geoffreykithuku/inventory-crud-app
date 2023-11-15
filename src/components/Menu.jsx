import React from 'react'

import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav className="bg-blue-400 flex justify-between md:px-20 text-white rounded items-center py-4 px-5 w-full">
      <p className="text-xl font-bold">Inventory MGT</p>
      <ul className="flex gap-5 md:gap-8  text-xl ">
        <Link to="/">Inventory</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/new-item">New Item</Link>
        <Link to="/new-category">Add category</Link>
      </ul>
    </nav>
  );
}

export default Menu