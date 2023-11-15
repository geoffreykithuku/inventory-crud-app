import React, { useContext, useState } from "react";
import { InventoryContext } from "../context/context";
import { useParams, useNavigate } from "react-router";

const EditItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //initialize products using context
  const { products, setProducts, category } = useContext(InventoryContext);

  //filter product to edit from products
  const productToEdit = products.find((product) => product.id === parseInt(id));

  //form data
  const [name, setName] = useState(productToEdit.name);
  const [quantity, setQuantity] = useState(productToEdit.quantity);
  const [price, setPrice] = useState(productToEdit.price);
  const [category_id, setCategory_id] = useState(productToEdit.category_id);

  //handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProducts = products.map((product) => {
      if (product.id === parseInt(id)) {
        return {
          ...product,
          name,
          quantity,
          price,
          category_id,
        };
      }
      return product;
    });
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EditItem;
