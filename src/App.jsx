import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Domains from "./pages/Domains";
import Interview from "./pages/Interview";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/domains"
          element={<Domains />}
        />

        <Route
          path="/interview"
          element={<Interview />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;