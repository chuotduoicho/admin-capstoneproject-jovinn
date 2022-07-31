import "./transactions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TransactionTable from "../../components/transactionTable/TransactionTable";
import Table from "../../components/table/Table";

const Transactions = () => {
  return (
    <div className="list">
      
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <Datatable /> */}
        <Table/>
      </div>
    </div>
  );
};

export default Transactions;
