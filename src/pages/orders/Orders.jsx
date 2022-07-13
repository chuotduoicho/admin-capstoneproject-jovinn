import "./orders.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import OrderTable from "../../components/orderTable/OrderTable";

const Orders = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <OrderTable />
      </div>
    </div>
  );
};

export default Orders;
