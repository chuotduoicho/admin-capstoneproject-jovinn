import "./categoryTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, selectAllCategories } from "../../redux/categorySlice";
import { useEffect } from "react";

const CategoriesTable = () => {
  const navigate = useNavigate();
  const listCategories = useSelector(selectAllCategories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log("category",listCategories);
  const [data, setData] = useState(listCategories);

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
              <div 
                className="viewButton"
                onClick={() =>navigate("/categories/subCategories/" + params.row.id)}
              >View</div>
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
        Cách Danh mục
        <Link to="/categories/new" className="link">
          Add New
        </Link>
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

export default CategoriesTable;
