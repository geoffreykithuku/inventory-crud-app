import { Route, Routes } from "react-router-dom";
import Category from "./components/Categories";
import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";
import AddItem from "./components/AddItem";
import AddCategory from "./components/AddCategory";


function App() {
  return (
    <div className="p-5 max-w-[1440px] bg-[#f8f8f8] w-full h-screen">
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/new-item" element={<AddItem />} />
        <Route path="/new-category" element={<AddCategory />} />
      </Routes>
    </div>
  );
}

export default App;
