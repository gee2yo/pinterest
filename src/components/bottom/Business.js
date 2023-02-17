/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Business({ toggleSignUp }) {
  return (
    <StyledBusiness className="business">
      <div className="business-wrap">
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
          <p>비즈니스를 확장해 보세요</p>
        </header>
        <section className="formWrap">
          <section className="inputWrap">
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
            <button type="submit">계정 만들기</button>
            <p>또는</p>
            <button type="button">기존 계정으로 로그인</button>
          </section>
          <section className="loginWrap">
            <p>
              계속 진행하면 Pinterest <span>서비스 약관</span>에 동의하고
              <br />
              <span>개인정보 보호정책</span>을 읽었음을 인정하는 것으로
              간주됩니다.<span>컬렉션 알림.</span>
            </p>
            <button type="button">이미 회원이신가요? 로그인하기</button>
          </section>
        </section>
      </div>
      <article className="personalWrap">
        <button type="submit" onClick={toggleSignUp}>
          개인 계정 만들기
        </button>
      </article>
    </StyledBusiness>
  );
}

const StyledBusiness = styled.section`
  width: 484px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: rgb(0, 0, 0, 45%);
  color: #333;

  .business-wrap {
    padding: 20px 10px 24px;

    .titleWrap {
      font-size: 1.6rem;
      .logoWrap {
        width: 45px;
        height: 45px;
        margin: 8px auto;
        display: flex;
        justify-content: center;
      }
      h1 {
        font-size: 3.2rem;
        font-weight: 600;
        line-height: 1.3;
        color: #333;
        text-align: center;
        word-break: keep-all;
      }
      p {
        text-align: center;
        margin-top: 22px;
      }
    }

    .formWrap {
      width: 268px;
      margin: 22px auto 0;
    }

    .inputWrap {
      font-size: 1.4rem;
      input {
        width: 100%;
        min-height: 48px;
        padding: 8px 16px;
        margin: 4px 0px 7px;
        border-radius: 16px;
        border: 3px solid var(--color-border-container);
      }
      input::placeholder {
        font-size: 1.6rem;
      }
      input:focus {
        outline: 5px solid #4a93dd;
      }
    }

    .btnWrap {
      margin-top: 8px;
      button {
        width: 100%;
        height: 40px;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        border-radius: 20px;

        &:nth-of-type(1) {
          background-color: #e60023;
        }
        &:nth-of-type(2) {
          color: var(--color-text-default);
          background-color: var(--color-background-lightgray);
        }
      }
      p {
        text-align: center;
        font-size: 1.4rem;
        margin: 8px 0px;
      }
    }

    .loginWrap {
      p {
        font-size: 1.1rem;
        text-align: center;
        color: #767676;
        margin: 12px 0px;
      }
      span {
        font-size: 1.2rem;
        color: #111;
      }
      button {
        font-size: 1.2rem;
        color: #111;
        width: 100%;
        text-align: center;
      }
    }
  }

  .personalWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 62px;
    border-radius: 0 0 32px 32px;
    background-color: var(--color-background-lightgray);
    button {
      font-size: 1.6rem;
      font-weight: 600;
      color: #333;
    }
  }
`;

Business.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
};
