"use client";

import type { FormEvent } from "react";
import React from "react";
import Link from "next/link";

import { BG_COLOR, TEXT_COLOR } from "@/constants/global/colors";
import InputWithLabel from "@/components/designSystem/InputWithLabel";
import Button from "@/components/designSystem/Button";
import useIcon from "@/hooks/useIcon";
import { authAPI } from "@/api/api";
import useInput from "@/hooks/useInput";

const styles = {
  container: `flex flex-col items-center w-[800px] h-[800px] ${BG_COLOR.general02}`,
  loginSection: {
    wrapper: `w-[465px]`,
    title: `text-[32px] text-center leading-normal mt-12 mb-[88px] font-hack`,
    form: `flex flex-col gap-[38px]`,
    localSignUp: `flex justify-center gap-11 mt-[18px] pl-9`,
  },
  line: `w-full h-[3px] mt-[57px] mb-[29px] ${BG_COLOR.general03}`,
  social: {
    title: `text-center font-bold leading-none`,
    iconBox: `flex mt-[38px] gap-[112px]`,
  },
};

const Loginpage = () => {
  const emailInput = useInput();
  const passwordInput = useInput();
  const { getIcon } = useIcon();

  const kakao = getIcon("kakao", 80, 80);
  const google = getIcon("google", 80, 80);
  const github = getIcon("github", 80, 80);

  const REDIRECT_URI = "http://localhost:3000/auth/callback/google";
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${`188016563531-e4l4jvoj3muf8332aoinhhj0m2d90pqv.apps.googleusercontent.com`}&scope=openid%20email%20profile&response_type=code&redirect_uri=${REDIRECT_URI}&state=nVYd7MUtXsB9bU8HSaAzo2jVbP8op_sFVtGdU66baPU&code_challenge=DF6pPeQbrG5mW6VuUUSXDL_kxPKkDq8PyZvaW980oHs&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow`;

  const LoginHandler = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await authAPI.localLogin(
      emailInput.value,
      passwordInput.value,
    );
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <section className={styles.loginSection.wrapper}>
        <h1 className={styles.loginSection.title}>Log in</h1>
        <form className={styles.loginSection.form}>
          <InputWithLabel label="E-mail" type="email" {...emailInput} />
          <InputWithLabel label="PASSWORD" type="password" {...passwordInput} />
          <Button size="bigLogin" color="white" onClick={LoginHandler}>
            Log in
          </Button>
        </form>
        <div className={styles.loginSection.localSignUp}>
          <Link
            href="signup"
            className={`leading-none ${TEXT_COLOR.general07rev}`}
          >
            회원가입
          </Link>
          <div className={`leading-none ${TEXT_COLOR.general03rev}`}>|</div>
          <button className={`leading-none ${TEXT_COLOR.general07rev}`}>
            비밀번호 찾기
          </button>
        </div>
      </section>
      <hr className={styles.line} />
      <section>
        <h4 className={styles.social.title}>간편 로그인</h4>
        <div className={styles.social.iconBox}>
          <Link href={""}>{kakao}</Link>
          <Link href={googleURL}>{google}</Link>
          <Link href={""}>{github}</Link>
        </div>
      </section>
    </div>
  );
};

export default Loginpage;
