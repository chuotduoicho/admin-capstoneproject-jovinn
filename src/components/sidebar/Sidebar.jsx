import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Jovinn.</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li onClick={() => navigate("/")}>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admins" style={{ textDecoration: "none" }}>
            <li>
              <SupervisorAccountIcon className="icon" />
              <span>Admins</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          {/* <Link to="/requests" style={{ textDecoration: "none" }}>
            <li>
              <NoteAltIcon className="icon" />
              <span>Requests</span>
            </li>
          </Link> */}
          <Link to="/transactions" style={{ textDecoration: "none" }}>
            <li>
              <CurrencyExchangeIcon className="icon" />
              <span>Transactions</span>
            </li>
          </Link>
          {/* <Link to="/wallet" style={{ textDecoration: "none" }}>
            <li>
              <AccountBalanceWalletIcon className="icon" />
              <span>Wallet</span>
            </li>
          </Link> */}
          {/* <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li> */}

          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">EXPLORE</p>
          <li>
            <ManageSearchIcon className="icon" />
            <span>Discover</span>
          </li>
          <li>
            <AutoStoriesIcon className="icon" />
            <span>Blog</span>
          </li>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li> */}
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
