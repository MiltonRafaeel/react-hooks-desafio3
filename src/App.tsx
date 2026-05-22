import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Before from "./routes/Before";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="before" element={<Before />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App
