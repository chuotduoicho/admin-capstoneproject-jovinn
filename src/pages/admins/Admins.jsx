import "./admins.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import AdminTable from "../../components/adminTable/AdminTable";

const Admins = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <AdminTable />
      </div>
    </div>
  );
};

export default Admins;
