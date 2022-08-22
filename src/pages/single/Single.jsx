import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchUserDetail,
  selectAllTransactions,
  selectUserDetail,
} from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../redux/transactionSlice";
const Single = () => {
  const { userId } = useParams();
  const userDetail = useSelector(selectUserDetail);
  const listTransactions = useSelector(selectAllTransactions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserDetail(userId));
    dispatch(fetchTransactions(userId));
  }, []);
  console.log("userDetail", userDetail);
  console.log("listTransactions", listTransactions);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Thông tin người dùng</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">
                  {" "}
                  {userDetail.firstName + " " + userDetail.lastName}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userDetail.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{userDetail.phoneNumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quốc gia:</span>
                  <span className="itemValue">{userDetail.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">{userDetail.email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
