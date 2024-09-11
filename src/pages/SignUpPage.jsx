import LOGO from "../assets/images/Logo.svg";
import SignUpForm from "../components/specific/SignUpForm";
import style from "./SignPage.module.css";

export default function SignUpPage() {
  return (
    <main>
      <figure className={style.imgbox}>
        <img src={LOGO} alt="logo" />
      </figure>
      <section className={style.section}>
        <h1 className={style.title}>회원가입</h1>
        <SignUpForm />
      </section>
    </main>
  );
}
