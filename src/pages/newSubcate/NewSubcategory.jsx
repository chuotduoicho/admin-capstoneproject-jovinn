import "./newSubcategory.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCategory,
  addSubcate,
  fetchCategories,
} from "../../redux/categorySlice";

const NewSubcategory = () => {
  const { subCategoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [catName, setCatName] = useState("");
  const [success, setSuccess] = useState("");
  const subCate = {
    name: catName,
  };
  const handleAdd = (e) => {
    dispatch(addSubcate({ subCategoryId, subCate }))
      .unwrap()
      .then(() => {
        dispatch(fetchCategories());
        console.log("tao danh muc con thanh cong");
        navigate(-1);
      })
      .catch(() => {});
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Tạo danh mục con mới</h1>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <div className="form">
              <div className="formInput">
                <label>Tên danh mục con</label>
                <input
                  placeholder="Nhập tên danh mục"
                  onChange={(e) => setCatName(e.target.value)}
                  required
                />
              </div>
              <button onClick={handleAdd}>Tạo mới</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSubcategory;
