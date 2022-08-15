import "./transactionTable.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions, selectAllTransations } from "../../redux/transactionSlice";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const TransactionTable = () => {
  const transactions = useSelector(selectAllTransations);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    dispatch(fetchTransactions());
    setData(transactions);
  }, []);
  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Mã giao dịch</TableCell>
            <TableCell className="tableCell">ID người dùng</TableCell>
            <TableCell className="tableCell">Tên người dùng</TableCell>
            <TableCell className="tableCell">Ngày thanh toán</TableCell>
            <TableCell className="tableCell">Số tiền</TableCell>
            <TableCell className="tableCell">Đơn vị</TableCell>
            <TableCell className="tableCell">Ghi chú</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.paymentCode}</TableCell>
              <TableCell className="tableCell">{row.userId}</TableCell>
              <TableCell className="tableCell">{row.fullName}</TableCell>
              <TableCell className="tableCell">{row.dateCreated}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">$</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
