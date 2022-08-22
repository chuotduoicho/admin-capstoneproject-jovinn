import "./categoryTable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { categoryColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  selectAllCategories,
} from "../../redux/categorySlice";
import { useEffect } from "react";
import Categories from "../../pages/categories/Categories";

const CategoriesTable = () => {
  const listCategories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const actionColumn = [
    {
      field: "action",

      headerName: "",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/subCategories/" + params.row.id}>
              <div className="viewButton">Xem danh mục con</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Cách Danh mục
        <Link to="/categories/new" className="link">
          Tạo mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={listCategories}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default CategoriesTable;
