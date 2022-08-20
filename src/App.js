import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { adminInputs, categoryInputs, productInputs, skillInputs, subCategoryInputs, userInputs } from "./formSource";
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
import NewSkill from "./pages/newSkill/NewSkill";
import NewCategory from "./pages/newCategory/NewCategory";

function App() {
  const { darkMode } = useContext(DarkModeContext);

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
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="admins">
              <Route index element={<Admins />} />
              <Route path=":adminId" element={<Profile />} />
              <Route
                path="new"
                element={<New inputs={adminInputs} title="Thêm mới quản trị viên" />}
              />
            </Route>
            <Route path="categories">
              <Route index element={<Categories />} />
              <Route
                path="new"
                element={<NewCategory/>}
              />
            </Route>
            <Route path="subCategories/:categoryId">
              <Route index element={<SubCategories />} />
              <Route
                path="new"
                element={<New inputs={subCategoryInputs} title="Thêm mới danh mục con" />}
                
              />
            </Route>
            <Route path="skills/:subCategoryId" >
            <Route index element={<Skills />} />
            <Route
                path="new"
                element={<New inputs={skillInputs} title="Thêm mới kỹ năng" />}                
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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
