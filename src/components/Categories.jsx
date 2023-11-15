import React, { useContext } from "react";
import { InventoryContext } from "../context/context";
import { Trash2, Pencil } from "lucide-react";

const Category = () => {
    //initialize products using context
  const { products, setProducts, setCategory, category } =
      useContext(InventoryContext);
    
  // calculate number of products in a category
  const calculateNumberOfProducts = (id) => {
    const numberOfProducts = products.filter(
      (product) => product.category_id === id
    );
    return numberOfProducts.length;
  };

  const handleDelete = (id) => {
    //remove category
    const newCategories = category.filter((cat) => cat.id !== id);

    //remove prodducts whose category has been deleted
    const newProducts = products.filter(
      (product) => product.category_id !== id
    );
    setProducts(newProducts);

    setCategory(newCategories);
  };

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
            {category.map((cat, index) => (
              <tr key={index} className="border-b text-center">
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{calculateNumberOfProducts(cat.id)}</td>

                <td className="flex gap-4 items-center justify-center">
                  <button>
                    <Pencil size={20} color="#9370f5" />
                  </button>
                  <button onClick={() => handleDelete(cat.id)}>
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
