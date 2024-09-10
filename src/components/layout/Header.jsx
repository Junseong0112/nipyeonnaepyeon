import { Button } from "antd";
import LOGO from "../../assets/images/Logo.svg";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/signin");
  };

  return (
    <header className={style.header}>
      <Link to="/">
        <img src={LOGO} alt="logo" />
      </Link>
      <Button type="primary" onClick={handleClickSignIn}>
        로그인 하기
      </Button>
    </header>
  );
}
