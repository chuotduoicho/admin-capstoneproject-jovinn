import "./categories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import CategoriesTable from "../../components/categoryTable/CategoryTable";

const Categories = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <CategoriesTable />
      </div>
    </div>
  );
};

export default Categories;
