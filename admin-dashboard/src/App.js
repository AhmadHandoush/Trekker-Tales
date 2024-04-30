import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Trips from "./pages/trips";
import Teachers from "./pages/teachers";
import Users from "./pages/users";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Sidebar />
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
