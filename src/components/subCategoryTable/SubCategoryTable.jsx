import "./subCategoryTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns, subCategoryRows } from "../../datatablesource";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubCategories, selectSubcategories } from "../../redux/categorySlice";
import { useEffect } from "react";

const SubCategoriesTable = (categoryId) => {
  const subCategories = useSelector(selectSubcategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSubCategories(categoryId));
  },[]);
  console.log("subCats",subCategories);
  const [data, setData] = useState(subCategories);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/subCategories/detail" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Các danh mục con
        <a to="/categories/new" className="link">
          Add New
        </a>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={categoryColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default SubCategoriesTable;
