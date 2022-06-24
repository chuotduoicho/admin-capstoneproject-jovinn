import "./serviceTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { serviceColumns, serviceRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const ServiceTable = () => {
  const [data, setData] = useState(serviceRows);
  return (
    <div className="datatable">
      <div className="datatableTitle">List Services of Category A</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={serviceColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default ServiceTable;
