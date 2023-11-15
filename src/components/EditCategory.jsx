import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { InventoryContext } from "../context/context";

const EditCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { category, setCategory } = useContext(InventoryContext);
  const categoryToEdit = category.find((cat) => cat.id === parseInt(id));

  const [name, setName] = useState(categoryToEdit.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategories = category.map((cat) => {
      if (cat.id === parseInt(id)) {
        return {
          ...cat,
          name,
        };
      }
      return cat;
    });
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

export default EditCategory;
