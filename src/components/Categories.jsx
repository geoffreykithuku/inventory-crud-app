import React from "react";
import products from "../data/items.json";
import categories from "../data/categories.json";
import { Trash2, Pencil } from "lucide-react";
const Category = () => {

    // calculate number of products in a category
    const calculateNumberOfProducts = (id) => {
        const numberOfProducts = products.filter((product) => product.category_id === id);
        return numberOfProducts.length;
    }

  return (
    <div className="bg-white w-full h-auto rounded md:px-20 mt-3 ">
      
      <div className="mt-8 w-full p-5">
        <table className="table-auto border-spacing-1 w-full ">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Products</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="border-b text-center">
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{calculateNumberOfProducts(category.id)}</td>
                
                <td className="flex gap-4 items-center justify-center">
                  <button>
                    <Pencil size={20} color="#9370f5" />
                  </button>
                  <button>
                    <Trash2 size={20} color="#b5306a" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
