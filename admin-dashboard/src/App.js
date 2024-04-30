import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Trips from "./pages/trips";
import Teachers from "./pages/teachers";
import Users from "./pages/users";
import Header from "./components/Header";

import Login from "./pages/login";
import Sidebar from "./components/Sidebar";
import "./styles/utilities.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className=" basics flex">
          {" "}
          <Sidebar />
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;