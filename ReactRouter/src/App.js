import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
