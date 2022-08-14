import "./skill.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SubCategoriesTable from "../../components/subCategoryTable/SubCategoryTable";
import { useParams } from "react-router-dom";
import SKillTable from "../../components/skillTable/SkillTable";


const Skills = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SKillTable />
      </div>
    </div>
  );
};

export default Skills;
