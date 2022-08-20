import "./transactionTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exportWithdrawRequest, fetchTransactions, selectAllTransations } from "../../redux/transactionSlice";
import { Button } from "@mui/material";
import { transactionColumns } from "../../datatablesource";

const TransactionTable = () => {
  const transactions = useSelector(selectAllTransations);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions());

  }, []);
  useEffect(() => {
    setData(transactions);
  }, [transactions]);
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Các giao dịch
        <button className="link" onClick={() => dispatch(exportWithdrawRequest())}>
          Xuất file yêu cầu rút tiền
        </button>
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
