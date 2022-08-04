import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalUsers, selectTotalServices, fetchTotalUser, fetchTotalService } from "../../redux/adminSlice";
import { React, useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTotalUser());
    dispatch(fetchTotalService());
  }, []);
  const totalUser = useSelector(selectTotalUsers);
  const totalService = useSelector(selectTotalServices);
  console.log("users", totalUser);
  console.log("services", totalService);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" count={totalUser.totalUser}/>
          <Widget type="requests" />
          <Widget type="contracts" />
          <Widget type="services" count={totalService.totalService}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Thu nhập trong 6 tháng gần nhất" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Các giao dịch gần đây</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
