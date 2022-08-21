import "./skill.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SKillTable from "../../components/skillTable/SkillTable";
import { useParams } from "react-router-dom";


const Skills = () => {
  const { subCategoryId } = useParams();
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SKillTable subCategoryId={subCategoryId}/>
      </div>
    </div>
  );
};

export default Skills;
