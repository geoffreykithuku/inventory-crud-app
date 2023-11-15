import React, { useContext, useState } from "react";
import { InventoryContext } from "../context/context";
import { useNavigate } from "react-router";
const AddItem = () => {
  const navigate = useNavigate();

  //initialize products using context
  const { products, setProducts, category } = useContext(InventoryContext);

  //form data
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = [
      ...products,
      {
        id: products.length + 1,
        name,
        quantity,
        price,
        category_id,
      },
    ];
    //update products and redirect to home
    setProducts(newProducts);
    navigate("/");
  };

  return (
    <div className="bg-white  rounded px-10 mt-10 w-fit mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mx-auto w-full max-w-[400px] py-8 text-blue-400"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Product name"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type="text"
          placeholder="Quantity"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Price"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <select
          value={category_id}
          onChange={(e) => setCategory_id(+e.target.value)}
          name="category"
          id="category"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        >
          {category.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-400 text-white font-semibold rounded py-2 "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddItem;
