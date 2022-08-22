import "./subCategoryTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchSubCategories,
  selectSubcategories,
  selectSubcategoryStatus,
} from "../../redux/categorySlice";
import { useEffect } from "react";
import { Button } from "@mui/material";

const SubCategoriesTable = ({ categoryId }) => {
  const subCategories = useSelector(selectSubcategories);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchSubCategories(categoryId));
  }, []);
  console.log("subCats", categoryId);

  useEffect(() => {
    setData(subCategories);
  }, [subCategories]);

  const actionColumn = [
    {
      field: "action",
      headerName: "",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/addSkill/" + params.row.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Xem</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Các danh mục con
        {/* <Link to="/addSubcategory/" className="link"> */}
        <Button
          onClick={() => navigate("/addSubcategory/" + categoryId)}
          variant="outlined"
        >
          {" "}
          Tạo mới
        </Button>
        {/* </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default SubCategoriesTable;
