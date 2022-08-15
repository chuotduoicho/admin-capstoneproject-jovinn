import "./skillTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns, SKillColumns, skillRows } from "../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from "@mui/material";
import { fetchSkills, selectSkills, selectSkillStatus } from "../../redux/categorySlice";

const SKillTable = ({ subCategoryId }) => {
  const listSkill = useSelector(selectSkills);
  const status = useSelector(selectSkillStatus)
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    dispatch(fetchSkills(subCategoryId));
  }, []);

  useEffect(() => {
    if(status=="success"){
      setData(listSkill);
    }
  },[status]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <a href={"http://localhost:3000/subCategories/" + params.row.id}>
              <div
                className="viewButton"
              >View</div>
            </a>
            <Button
              className="deleteButton"
              onClick={() => {
                //handleDelete(params.row.id);
                handleClickOpen();
              }}
            >
              Delete
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Xác nhận xóa kỹ năng"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Bạn có muốn xóa kỹ năng này?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Hủy
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Đồng ý
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Cách Kỹ năng
        <Link to="/categories/new" className="link">
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={SKillColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default SKillTable;
