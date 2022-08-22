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
} from "../../redux/transactionSlice";
import { Button } from "@mui/material";
import { transactionColumns } from "../../datatablesource";
import { useNavigate } from "react-router-dom";
const TransactionTable = () => {
  const transactions = useSelector(selectAllTransations);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchTransactionsExport());
  }, []);
  useEffect(() => {
    setData(transactions);
  }, [transactions]);
  const headers = [
    { label: "Email/Phone", key: "firstName" },
    { label: "Amount", key: "lastName" },
    { label: "Currency code", key: "email" },
    { label: "Reference ID (optional)", key: "age" },
    { label: "Note to recipient", key: "age" },
    { label: "Recipient wallet", key: "age" },
  ];

  const data2 = [
    {
      firstName: "Warren",
      lastName: "Morrow",
      email: "sokyt@mailinator.com",
      age: "36",
    },
    {
      firstName: "Gwendolyn",
      lastName: "Galloway",
      email: "weciz@mailinator.com",
      age: "76",
    },
    {
      firstName: "Astra",
      lastName: "Wyatt",
      email: "quvyn@mailinator.com",
      age: "57",
    },
    {
      firstName: "Jasmine",
      lastName: "Wong",
      email: "toxazoc@mailinator.com",
      age: "42",
    },
    {
      firstName: "Brooke",
      lastName: "Mcconnell",
      email: "vyry@mailinator.com",
      age: "56",
    },
    {
      firstName: "Christen",
      lastName: "Haney",
      email: "pagevolal@mailinator.com",
      age: "23",
    },
    {
      firstName: "Tate",
      lastName: "Vega",
      email: "dycubo@mailinator.com",
      age: "87",
    },
    {
      firstName: "Amber",
      lastName: "Brady",
      email: "vyconixy@mailinator.com",
      age: "78",
    },
    {
      firstName: "Philip",
      lastName: "Whitfield",
      email: "velyfi@mailinator.com",
      age: "22",
    },
    {
      firstName: "Kitra",
      lastName: "Hammond",
      email: "fiwiloqu@mailinator.com",
      age: "35",
    },
    {
      firstName: "Charity",
      lastName: "Mathews",
      email: "fubigonero@mailinator.com",
      age: "63",
    },
  ];

  const csvReport = {
    data: data2,
    headers: headers,
    filename: "Các giao dịch trong tháng.csv",
  };
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Các giao dịch
        {/* <button
          className="link"
          onClick={() =>
            navigate("http://localhost:8080/api/admin/export-withdraw-request")
          }
        >
          Xuất file yêu cầu rút tiền
        </button> */}
        <a
          href="http://localhost:8080/api/admin/export-withdraw-request"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Xuất file yêu cầu rút tiền
        </a>
        <CSVLink {...csvReport}>Export to CSV</CSVLink>
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
