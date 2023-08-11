import { BrowserRouter, Route, Routes } from "react-router-dom";
import hero from "./hero.jpg";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          {/* <header>
            <span>LOGO</span>
            <input type="text" />
            <span></span>
            <span></span>
          </header>
          <main>
            <div></div>
          </main>
          <footer></footer>
          <img src={hero} alt="hero" /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
