import "./transactionTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { CSVLink } from "react-csv";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  exportWithdrawRequest,
  fetchTransactions,
  fetchTransactionsExport,
  selectAllTransations,
  selectAllTransationsExport,
} from "../../redux/transactionSlice";
import { Button, TextField } from "@mui/material";
import { transactionColumns } from "../../datatablesource";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider, YearPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const TransactionTable = () => {
  // const transactions = useSelector(selectAllTransations);
  const transactionsExport = useSelector(selectAllTransationsExport);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchTransactions());
    dispatch(fetchTransactionsExport());
  }, []);
  useEffect(() => {
    setData(transactionsExport);
  }, [transactionsExport]);
  const headers = [
    { label: "Email/Phone", key: "description" },
    { label: "Amount", key: "amount" },
    { label: "Currency code", key: "currency" },
    { label: "Reference ID (optional)", key: "userId" },
    { label: "Note to recipient", key: "message" },
    { label: "Recipient wallet", key: "method" },
    { label: "ocial Feed Privacy (optional)", key: "" },
    { label: "Holler URL (deprecated)", key: "" },
    { label: "Logo URL (optional)", key: "" },
  ];

  const csvReport = {
    data: transactionsExport,
    headers: headers,
    filename: "Các giao dịch trong tháng.csv",
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Các giao dịch
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <YearPicker
            label="Basic example"
            value="2002"
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
        <CSVLink {...csvReport} className="link">
          Xuất dữ liệu
        </CSVLink>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={transactionColumns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default TransactionTable;
