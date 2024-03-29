import "./newSkill.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCategory,
  addSkill,
  addSubcate,
  fetchCategories,
} from "../../redux/categorySlice";

const NewSkill = () => {
  const { subCategoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [catName, setCatName] = useState("");
  const [success, setSuccess] = useState("");
  const subCate = {
    name: catName,
    subCategoryId: subCategoryId,
  };
  const handleAdd = (e) => {
    dispatch(addSkill(subCate))
      .unwrap()
      .then(() => {
        dispatch(fetchCategories());
        console.log("tao danh ki nang thanh cong");
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
          <h1>Tạo kỹ năng</h1>
        </div>
        <div className="bottom">
          <div className="left"></div>
          <div className="right">
            <div className="form">
              <div className="formInput">
                <label>Tên kỹ năng</label>
                <input
                  placeholder="Nhập tên kỹ năng"
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

export default NewSkill;
