import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./pages/profile/Profile";
import Admins from "./pages/admins/Admins";
import Orders from "./pages/orders/Orders";
import Transactions from "./pages/transactions/Transactions";
import Categories from "./pages/categories/Categories";
import SubCategories from "./pages/subCategories/SubCategories";
import Skills from "./pages/skills/Skill";
import NewCategory from "./pages/newCategory/NewCategory";
import NewSubcategory from "./pages/newSubcate/NewSubcategory";
import NewSkill from "./pages/newSkill/NewSkill";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  console.log(process.env.REACT_APP_NAME);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="admins">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<Profile />} />
            </Route>
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route path="new" element={<NewCategory />} />
            </Route>
            <Route path="subCategories/:categoryId">
              <Route index element={<SubCategories />} />
            </Route>
            <Route path="addSubCategory/:categoryId">
              <Route index element={<NewSubcategory />} />
            </Route>
            <Route path="skills/:subCategoryId">
              <Route index element={<Skills />} />
            </Route>
            <Route path="addSkill/:subCategoryId">
              <Route index element={<NewSkill />} />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path=":orderId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Admin" />}
              /> */}
            </Route>
            <Route path="transactions">
              <Route index element={<Transactions />} />
              <Route path=":transactionId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
