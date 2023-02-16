/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";

export default function SignUp() {
  return (
    <StyledSingUp>
      <section className="wrap">
        <header className="titleWrap">
          <div className="logoWrap">
            <svg
              height="40"
              viewBox="-3 -3 82 82"
              width="40"
              style={{ display: "block" }}
            >
              <title>Pinterest 로고</title>
              <circle cx="38" cy="38" fill="white" r="40" />
              <path
                d="M27.5 71c3.3 1 6.7 1.6 10.3 1.6C57 72.6 72.6 57 72.6 37.8 72.6 18.6 57 3 37.8 3 18.6 3 3 18.6 3 37.8c0 14.8 9.3 27.5 22.4 32.5-.3-2.7-.6-7.2 0-10.3l4-17.2s-1-2-1-5.2c0-4.8 3-8.4 6.4-8.4 3 0 4.4 2.2 4.4 5 0 3-2 7.3-3 11.4C35.6 49 38 52 41.5 52c6.2 0 11-6.6 11-16 0-8.3-6-14-14.6-14-9.8 0-15.6 7.3-15.6 15 0 3 1 6 2.6 8 .3.2.3.5.2 1l-1 3.8c0 .6-.4.8-1 .4-4.4-2-7-8.3-7-13.4 0-11 7.8-21 22.8-21 12 0 21.3 8.6 21.3 20 0 12-7.4 21.6-18 21.6-3.4 0-6.7-1.8-7.8-4L32 61.7c-.8 3-3 7-4.5 9.4z"
                fill="#e60023"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h1>Pinterest에 오신 것을 환영합니다</h1>
          <p>시도해 볼 만한 새로운 아이디어 찾기</p>
        </header>
        <section className="formWrap">
          <div>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="pw">비밀번호</label>
            <input type="password" id="pw" />
          </div>
          <div>
            <label htmlFor="age">나이</label>
            <input type="text" id="age" />
          </div>
        </section>
        <section className="btnWrap">
          <button type="submit">계속하기</button>
        </section>
        <section className="loginWrap">
          <p>
            계속 진행하면 Pinterest <span>서비스 약관</span>에 동의하고
            <br />
            <span>개인정보 보호정책</span>을 읽었음을 인정하는 것으로 간주됩니다
            <br />
            <span>컬렉션 알림.</span>
          </p>
          <span>이미 회원이신가요?</span>
          <span>로그인하기</span>
        </section>
        <article className="businessWrap">
          <button type="submit">무료 Business 계정 만들기</button>
        </article>
      </section>
    </StyledSingUp>
  );
}

const StyledSingUp = styled.div`
  width: 484px;
  border-radius: 32px;
  background-color: #aaa;
  box-shadow: rgb(0, 0, 0, 45%);

  .titleWrap {
    .logoWrap {
      width: 45px;
      height: 45px;
      margin: 8px auto;
      display: flex;
      justify-content: center;
    }
    h1 {
      font-size: 32px;
      color: rgb(51, 51, 51);
      text-align: center;
      margin-block-start: 0.5em;
      margin-block-end: 0.5em;
    }
    p {
      text-align: center;
    }
  }
`;
