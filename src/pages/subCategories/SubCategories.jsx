import "./subCategories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SubCategoriesTable from "../../components/subCategoryTable/SubCategoryTable";
import { useParams } from "react-router-dom";


const SubCategories = () => {
  const {categoryId} = useParams();
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SubCategoriesTable categoryId={categoryId}/>
      </div>
    </div>
  );
};

export default SubCategories;
