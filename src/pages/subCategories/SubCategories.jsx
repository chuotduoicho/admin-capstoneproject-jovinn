import "./subCategories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SubCategoriesTable from "../../components/subCategoryTable/SubCategoryTable";

const SubCategories = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SubCategoriesTable />
      </div>
    </div>
  );
};

export default SubCategories;
