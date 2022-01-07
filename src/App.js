import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./component/TopBar/TopBar";
import DisplayUsers from "./pages/displayUsers/DisplayUsers";
import RegisterForm from "./pages/registerForm/RegisterForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/alluser" element={<DisplayUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
