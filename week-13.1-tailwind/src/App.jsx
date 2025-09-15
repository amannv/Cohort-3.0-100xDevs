import { useState } from "react";
import "./App.css";

function App() {

  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className="flex">
      <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <MainContent sideBarOpen={sideBarOpen} />
    </div>
  )
}

const SideBar = ({sideBarOpen, setSideBarOpen}) => {
  return (
    <div>
      <div className="w-80 h-screen bg-red-100"></div>
    </div>
  )
}

const MainContent = () => {
  return (
    <div className="w-full">
      <div className="h-42 mb-4 bg-black"></div>
    <div className="grid grid-cols-11 gap-4">
      <div className="h-64 ml-4 p-8 rounded-2xl -translate-y-24 bg-red-200 col-span-2 shadow-xl"></div>
      <div className="h-96 rounded-2xl bg-green-200 col-span-6 shadow-xl"></div>
      <div className="h-96 rounded-2xl mr-4 bg-yellow-200 col-span-3 shadow-xl"></div>

    </div>
    </div>
  )
}

export default App
