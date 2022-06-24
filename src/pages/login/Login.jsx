import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="login">
      <p className="title">Jovinn.</p>
      <div className="form">
        <TextField
          className="input"
          label="username"
          variant="outlined"
          required
        />
        <TextField
          className="input"
          label="password"
          variant="outlined"
          required
        />

        <Button variant="outlined" className="btn" onClick={handleLogin}>
          Login
        </Button>
        {/* <Alert severity="error" className="error" disabled>
          Username or Password is wrong!
        </Alert> */}
      </div>
    </div>
  );
};

export default Login;
