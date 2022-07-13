import "./orderTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { orderColumns, orderRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const OrderTable = () => {
  const [data, setData] = useState(orderRows);
  return (
    <div className="datatable">
      <div className="datatableTitle">List Orders</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={orderColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default OrderTable;
