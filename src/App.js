import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/authentication";


const Shop = () => {
  return (
    <div>
      <h1>I am the shopping</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation/>}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication/>} />

        </Route>
      </Routes>
    </div>
  );
};

export default App;
