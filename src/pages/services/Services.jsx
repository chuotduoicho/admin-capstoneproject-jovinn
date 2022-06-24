import "./services.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ServiceTable from "../../components/serviceTable/ServiceTable";

const Services = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ServiceTable />
      </div>
    </div>
  );
};

export default Services;
