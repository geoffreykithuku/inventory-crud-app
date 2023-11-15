import Dashboard from "./components/Dashboard";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="p-5 max-w-[1440px] bg-[#f8f8f8] w-full h-screen">
      <Menu />
      <Dashboard />
    </div>
  );
}

export default App;
