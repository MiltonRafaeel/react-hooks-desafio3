import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Before from "./routes/Before";
import After from "./routes/Before/After";

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="before" element={<Before />} >
        <Route path="after" element={<After />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App
