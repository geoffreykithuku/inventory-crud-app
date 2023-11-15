import React from "react";
import products from "../data/items.json";
import categories from "../data/categories.json";
import { Trash2, Pencil } from "lucide-react";
const Dashboard = () => {


    // filter category using category id on products
    const extractCategoryName = (id) => {
        const category = categories.find((category) => category.id === id);
        return category.name;
    }

  return (
    <div className="bg-white w-full h-auto rounded px-20 mt-3 ">
      <div className="flex items-center justify-center gap-10 pt-5">
        <input
          type="search"
          placeholder="search"
          className="text-blue-400 border px-4 py-1 rounded outline-none"
        />
        <button className="bg-blue-400 text-white px-3 py-1 rounded">
          Search
        </button>
      </div>
      <div className="mt-3 w-full p-5">
        <table className="table-auto border-spacing-1 w-full ">
          <thead className="bg-blue-400 text-white">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b text-center">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{extractCategoryName(product.category_id)}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
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

export default Dashboard;
