import React, { useState, useContext } from "react";
import { InventoryContext } from "../context/context";
import { useNavigate } from "react-router";

const AddCategory = () => {
  const navigate = useNavigate();

  const { category, setCategory } = useContext(InventoryContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategories = [
      ...category,
      {
        id: category.length + 1,
        name,
      },
    ];
    setCategory(newCategories);
    navigate("/categories");
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
          placeholder="Category name"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
          required
        />

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

export default AddCategory;
