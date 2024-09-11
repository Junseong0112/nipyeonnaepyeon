import LOGO from "../assets/images/Logo.svg";
import SignInForm from "../components/specific/SignInForm";
import style from "./SignPage.module.css";

export default function SignInPage() {
  return (
    <main>
      <figure className={style.imgbox}>
        <img src={LOGO} alt="logo" />
      </figure>
      <section className={style.section}>
        <h1 className={style.title}>로그인</h1>
        <SignInForm />
      </section>
    </main>
  );
}
