import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  banOrUnbanUser,
  fetchAllUsers,
  selectAllUsers,
} from "../../redux/userSlice";
import { Button } from "@mui/material";

const Datatable = () => {
  const listUsers = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAllUsers());
    console.log("list user", listUsers);
    //setData(listUsers);
  }, []);

  const handleBan = (id) => {
    dispatch(banOrUnbanUser(id))
      .unwrap()
      .then(() => {
        dispatch(fetchAllUsers());
      });
    navigate("/users");
  };

  const actionColumn = [
    {
      field: "action",

      headerName: "",

      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">Xem</div>
            <Button
              className="deleteButton"
              onClick={() => handleBan(params.row.id)}
            >
              {params.row.isEnabled ? "Cấm" : "Bỏ cấm"}
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách người dùng
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={listUsers}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Datatable;
