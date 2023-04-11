import { Home } from "./pages/Home/index";
import { Profile } from "./pages/Profile/index";
import { GlobalStyled } from "./GlobalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
