import { HashRouter, Route, Routes } from "react-router-dom";
// Pages
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EditPage } from "./pages/EditPage";
import { AddPage } from "./pages/AddPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/add"
            element={<AddPage />}
          />

          <Route
            path="/edit/:id"
            element={<EditPage />}
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App
