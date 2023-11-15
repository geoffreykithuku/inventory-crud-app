import React, { useContext, useState } from "react";
import items from "../data/items.json";
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";
import { InventoryContext } from "../context/context";
const Dashboard = () => {
  const { products, setProducts, category, resetProducts } =
    useContext(InventoryContext);
  const [search, setSearch] = useState("");

  // filter category using category id on products
  const extractCategoryName = (id) => {
    const productCategory = category.find((cat) => cat.id === id);
    return productCategory.name;
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search.length === 0) {
      resetProducts();
    } else {
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );

      setProducts(filteredProducts);
    }
  };

  //reset products table
  const handleReset = () => {
    setSearch("");
    resetProducts();
  };
    const handleDelete = (id) => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
    }

  return (
    <div className="bg-white w-full h-auto rounded px-20 mt-3 ">
      <div className="flex items-center justify-center gap-10 pt-5">
        <input
          onChange={handleSearch}
          value={search}
          type="search"
          placeholder="search"
          className="text-blue-400 border px-4 py-1 rounded outline-none"
        />
        <button
          onClick={handleReset}
          className="bg-blue-400 text-white px-3 py-1 rounded"
        >
          Reset
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
                  <Link to={`edit-item/${product.id}`}>
                    <Pencil size={20} color="#9370f5" />
                  </Link>
                  <button onClick={()=>handleDelete(product.id)}>
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
