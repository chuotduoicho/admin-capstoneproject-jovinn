import "./login.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
  const [successful, setSuccessful] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password}))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        setSuccessful(false);
      });   
  };
  return (
    <div className="login">
      <p className="title">Jovinn.</p>
      <form className="form" onSubmit={handleLogin}>
        <TextField
          className="input"
          label="Tên đăng nhập"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          className="input"
          label="Mật khẩu"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button variant="outlined" className="btn" type="submit">
          Login
        </Button>
        {/* <Alert severity="error" className="error" disabled>
          Username or Password is wrong!
        </Alert> */}
      </form>
    </div>
  );
};

export default Login;
