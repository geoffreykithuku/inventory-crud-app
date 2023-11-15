import React from 'react'
import { Plus } from 'lucide-react'
const Menu = () => {
  return (
    <nav className="bg-blue-400 flex justify-between px-20 text-white rounded items-center py-4">
      <p className="text-2xl font-bold">Logo</p>
      <ul className="flex gap-8  text-xl">
        <li>
          <p>Inventory</p>
        </li>
        <li>Categories</li>
        <li className="flex items-center">
          <p>Add Inventory</p>
          <Plus size={20} color="#ffffff" />
        </li>
        <li className='flex items-center'>
          <p>Add Category</p>
          <Plus size={20} color="#ffffff" />
        </li>
      </ul>
    </nav>
  );
}

export default Menu