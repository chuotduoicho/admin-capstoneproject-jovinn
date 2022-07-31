import "./widget.scss";
import { useState } from "react";
import { selectTotalUsers,selectTotalServices } from "../../redux/adminSlice";
import { useSelector } from "react-redux";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Link } from "react-router-dom";
const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;
  // const totalUser = useSelector(selectTotalUsers);
  // const totalService = useSelector(selectTotalServices);

  switch (type) {
    case "users":
      data = {
        title: "SỐ NGƯỜI DÙNG",
        isMoney: false,
        link: "Xem danh sách người dùng",
        value: "10",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "services":
      data = {
        title: "DỊCH VỤ",
        isMoney: false,
        link: "Xem danh sách dịch vụ",
        value: "11",
        icon: (
          <HomeRepairServiceIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "requests":
      data = {
        title: "YÊU CẦU",
        isMoney: false,
        link: "Xem danh sách yêu cầu",
        value: "7",
        icon: (
          <ReceiptLongIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "contracts":
      data = {
        title: "HƠP ĐỒNG",
        isMoney: false,
        link: "Xem danh sách hợp đồng",
        value: "5",
        icon: (
          <AssignmentIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.value}
        </span>
        <Link to={"/" + data.title}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
