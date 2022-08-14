import "./transactions.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TransactionTable from "../../components/transactionTable/TransactionTable";

const Transactions = () => {
  return (
    <div className="list">
      
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {/* <Datatable /> */}
        <TransactionTable/>
      </div>
    </div>
  );
};

export default Transactions;
