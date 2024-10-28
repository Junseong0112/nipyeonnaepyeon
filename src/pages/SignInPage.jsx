import LOGO from "../assets/images/Logo.svg";
import SignInForm from "../components/specific/SignInForm";
import styled from "styled-components";

const Main = styled.main`
  padding: 5rem 0;

  figure {
    text-align: center;
    margin: 0 0 1.25rem;
    > img {
      width: 6.25rem;
    }
  }

  section {
    max-width: 680px;
    margin: 0 auto;
    padding: 1.25rem 0.9375rem;
  }

  h1 {
    text-align: center;
    font-size: 32px;
    margin: 0 0 1.25rem;
  }
`;

export default function SignInPage() {
  return (
    <Main>
      <figure>
        <img src={LOGO} alt="logo" />
      </figure>
      <section>
        <h1>로그인</h1>
        <SignInForm />
      </section>
    </Main>
  );
}
