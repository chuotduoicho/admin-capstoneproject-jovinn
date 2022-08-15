import "./newCategory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory, fetchCategories, selectSubcategoryStatus } from "../../redux/categorySlice";

const NewCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  cosnt [success, setSuccess] = useState("");
  const category = {
    name: name
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addCategory({category}))
      .unwrap()
      .then(() => {
        dispatch(fetchCategories());
        setSuccess("Tạo danh mục thành công!");
        navigate("/categories")
      })

  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Tạo danh mục mới</h1>
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            <form>
              <div className="formInput" >
                <label>Tên danh mục</label>
                <input placeholder="Nhập tên danh mục" />
              </div>
              <button>Tạo mới</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
