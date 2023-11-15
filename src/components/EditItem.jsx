import React from "react";
import { useParams } from "react-router";
const EditItem = () => {

    const { id } = useParams()

    
  return (
    <div className="bg-white  rounded px-10 mt-10 w-fit mx-auto">
      <form className="flex flex-col gap-5 mx-auto w-full max-w-[400px] py-8 text-blue-400">
        <input
          type="text"
          placeholder="Product name"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <input
          type="text"
          placeholder="Quantity"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <input
          type="number"
          placeholder="Price"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
        <select
          name="category"
          id="category"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        >
          <option value="category">Category</option>
        </select>
        <button className="bg-blue-400 text-white font-semibold rounded py-2 ">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditItem;
