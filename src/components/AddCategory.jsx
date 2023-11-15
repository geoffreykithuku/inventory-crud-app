import React from 'react'

const AddCategory = () => {
  return (
    <div className="bg-white  rounded px-10 mt-10 w-fit mx-auto">
      <form className="flex flex-col gap-5 mx-auto w-full max-w-[400px] py-8 text-blue-400">
        <input
          type="text"
          placeholder="Category name"
          className="bg-blue-400 bg-opacity-10 px-4 py-2 rounded outline-none"
        />
       
        <button className="bg-blue-400 text-white font-semibold rounded py-2 ">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddCategory