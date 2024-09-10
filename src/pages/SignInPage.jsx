import LOGO from "../assets/images/Logo.svg";
import SignInForm from "../components/specific/SignInForm";
import style from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <main>
      <figure className={style.imgbox}>
        <img src={LOGO} alt="logo" />
      </figure>
      <SignInForm />
    </main>
  );
}
