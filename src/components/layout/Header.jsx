import { Button } from "antd";
import LOGO from "../../assets/images/Logo.svg";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={LOGO} alt="logo" />
      </Link>
      <Button type="primary" size="large">
        로그인 하기
      </Button>
    </header>
  );
}
