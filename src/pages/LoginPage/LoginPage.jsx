import { useState } from "react";
import InputForm from "components/basics/InputForm/InputForm";
import styles from "./LoginPage.module.scss";
import loginImage from "assets/images/loginImage.jpg";
import Button from "components/basics/Button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [valuesForm, setValuesForm] = useState({
    userName: "",
    password: "",
  });

  const changeForm = (value, name) => {
    setValuesForm({
      ...valuesForm,
      [name]: value,
    });
  };

  return (
    <div className={styles.container_login}>
      <div className={styles.container_login_form}>
        <h3>Welcome to login app</h3>
        <InputForm
          name={valuesForm.userName}
          onChange={(value) => changeForm(value, "userName")}
          placeholder="User name"
          type="text"
          style={{
            maxWidth: "240px",
          }}
        />
        <InputForm
          name={valuesForm.password}
          onChange={(value) => changeForm(value, "password")}
          placeholder="Password"
          type="password"
          style={{
            maxWidth: "240px",
          }}
        />
        <Button
          onClick={() => {
            sessionStorage.setItem('USER_LOG',JSON.stringify({...valuesForm}))
            navigate("/list");
          }}
          disable={!valuesForm.userName && !valuesForm.password }
        >
          Login
        </Button>
      </div>
      <img className={styles.image_login} src={loginImage} alt="loginImage" />
    </div>
  );
};

export default LoginPage;
