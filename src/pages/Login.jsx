import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        {/* <span className="logo">Чат</span> */}
        <span className="title">Потребителски вход</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="имейл" />
          <input type="password" placeholder="парола" />
          <button>Вход</button>
          {err && <span>Грешен имейл или парола!</span>}
        </form>
        <p>Нямате акаунт? <Link to="/register">Регистрирайте се!</Link></p>
      </div>
    </div>
  );
};

export default Login;
