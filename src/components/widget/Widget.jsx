import "./widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { Link } from "react-router-dom";

const Widget = ({ type, count}) => {
  let data;
  //temporary

  switch (type) {
    case "users":
      data = {
        title: "SỐ NGƯỜI DÙNG",
        link: "Xem danh sách người dùng",
        value: count,
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
        link: "Xem danh sách dịch vụ",
        value: count,
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
        link: "Xem danh sách yêu cầu",
        value: count,
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
        link: "Xem danh sách hợp đồng",
        value: count,
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
          {data.value}
        </span>
        {/* <Link to={"/" + data.title}>
          <span className="link">{data.link}</span>
        </Link> */}
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
