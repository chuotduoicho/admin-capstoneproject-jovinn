import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./pages/profile/Profile";
import Admins from "./pages/admins/Admins";
import Orders from "./pages/orders/Orders";
import Transactions from "./pages/transactions/Transactions";
import Categories from "./pages/categories/Categories";
import Services from "./pages/services/Services";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="admins">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Admin" />}
              />
            </Route>
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route path="services" element={<Services />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Admin" />}
              />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Admin" />}
              />
            </Route>
            <Route path="transactions">
              <Route index element={<Transactions />} />
              <Route path=":transactionId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Admin" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
