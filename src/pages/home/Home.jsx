import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountData, fetchRevenueByMonths, selectCountData, selectRevenueByMonth } from "../../redux/adminSlice";
import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    } else {
      dispatch(fetchCountData());
      dispatch(fetchRevenueByMonths());
    }
  }, [admin]);
  const countData = useSelector(selectCountData);
  const revenueByMonth = useSelector(selectRevenueByMonth);
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="users" count={countData.totalUser} />
          <Widget type="requests" count={countData.totalRequest}/>
          <Widget type="contracts" count={countData.totalContract}/>
          <Widget type="services" count={countData.totalService} />
        </div>
        <div className="charts">
          <Featured amount={countData.totalRevenue}/>
          <Chart title="Thu nhập trong 6 tháng gần nhất" aspect={2 / 1} chartData={revenueByMonth}/>
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Các giao dịch gần đây</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
