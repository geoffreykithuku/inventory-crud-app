import React from 'react'
import { Plus } from 'lucide-react'
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav className="bg-blue-400 flex justify-between md:px-20 text-white rounded items-center py-4 px-5 w-full">
      <p className="text-2xl font-bold">Logo</p>
      <ul className="flex gap-5 md:gap-8  text-xl ">
        <Link to="/">Inventory</Link>
        <Link to="/categories">Categories</Link>
        <li className="flex items-center">
          <p>Add Inventory</p>
          <Plus size={20} color="#ffffff" />
        </li>
        <li className="flex items-center">
          <p>Add Category</p>
          <Plus size={20} color="#ffffff" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu