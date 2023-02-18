/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SignUp({ toggleSignUp }) {
  const [ispwView, setIsPwView] = useState(false);
  const handlePwView = () => {
    setIsPwView(!ispwView);
  };
  return (
    <StyledSingUp className="singUp">
      <div className="singUp-wrap">
        <header className="titleWrap">
          <div className="logoWrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.svg`}
              alt="pinterest 로고"
            />
          </div>
          <h1>Pinterest에 오신 것을 환영합니다</h1>
          <p>시도해 볼 만한 새로운 아이디어 찾기</p>
        </header>
        <section className="formWrap">
          <section className="inputWrap">
            <div>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력하세요"
              />
            </div>
            <div>
              <label htmlFor="pw">비밀번호</label>
              <div className="pwInputWrap">
                <input
                  className="pwInput"
                  type="password"
                  id="pw"
                  placeholder="비밀번호를 입력하세요"
                />
                {!ispwView ? (
                  <div className="pwImg on">
                    <button
                      className="pwImgFrame"
                      type="button"
                      onClick={handlePwView}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/bottom/eyeOn.svg`}
                        alt="비밀번호 보기"
                      />
                      <p className="pwOnTooltip">비밀번호 보기</p>
                    </button>
                  </div>
                ) : (
                  <div className="pwImg off">
                    <button
                      className="pwImgFrame"
                      type="button"
                      onClick={handlePwView}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/bottom/eyeOff.svg`}
                        alt="비밀번호 보기"
                      />
                      <p className="pwOnTooltip">비밀번호 숨기기</p>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="age">나이</label>
              <input type="text" id="age" placeholder="나이를 입력하세요" />
            </div>
          </section>
          <section className="btnWrap">
            <button type="submit">계속하기</button>
            <p>또는</p>
            <button type="button">
              <img
                src={`${process.env.PUBLIC_URL}/images/bottom/facebook.png`}
                alt="페이스북 로고"
              />
              Facebook으로 계속하기
            </button>
          </section>
          <section className="loginWrap">
            <p>
              계속 진행하면 Pinterest{" "}
              <span>
                <a
                  href="hhttps://policy.pinterest.com/ko/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  서비스 약관
                </a>
              </span>
              에 동의하고
              <br />
              <span>
                <a
                  href="https://policy.pinterest.com/ko/privacy-policys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  개인정보 보호정책
                </a>
              </span>
              을 읽었음을 인정하는 것으로 간주됩니다.
              <span>
                <a
                  href="https://policy.pinterest.com/ko/notice-at-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  컬렉션 알림.
                </a>
              </span>
            </p>
            <button type="button">이미 회원이신가요? 로그인하기</button>
          </section>
        </section>
      </div>
      <article className="businessWrap">
        <button type="submit" onClick={toggleSignUp}>
          무료 Business 계정 만들기
        </button>
      </article>
    </StyledSingUp>
  );
}

const StyledSingUp = styled.section`
  width: 484px;
  border-radius: 32px;
  background-color: #fff;
  box-shadow: rgb(0, 0, 0, 45%);
  color: #333;

  .singUp-wrap {
    padding: 20px 10px 24px;

    .titleWrap {
      width: 350px;
      margin: 0 auto;
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
        line-height: 1.2;
        color: #333;
        text-align: center;
        word-break: keep-all;
      }
      p {
        text-align: center;
        margin-top: 5px;
      }
    }

    .formWrap {
      width: 268px;
      margin: 20px auto 0;
    }

    .inputWrap {
      font-size: 1.4rem;
      div:hover input {
        border: 2px solid #999;
      }
      label {
        margin-left: 8px;
      }
      input {
        width: 100%;
        min-height: 48px;
        padding: 8px 16px;
        margin: 1px 0px 7px;
        border-radius: 16px;
        border: 2px solid var(--color-border-container);
      }
      input::placeholder {
        font-size: 1.6rem;
      }
      input:focus {
        outline: 4px solid #92c1ff;
      }

      .pwInputWrap {
        position: relative;

        .pwImg {
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          right: 8px;
          height: 100%;

          .pwImgFrame {
            position: relative;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            cursor: pointer;
            &:hover {
              background-color: var(--color-background-lightgray);
            }
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 12px;
              height: 12px;
              &:hover ~ p {
                display: block;
              }
            }
            p {
              display: none;
              position: absolute;
              top: 100%;
              left: 50%;
              transform: translateX(-50%);
              width: 100px;
              height: 30px;
              background-color: #000;
              border-radius: 7px;
              color: #fff;
              line-height: 30px;
            }
          }
        }
      }
    }

    .btnWrap {
      margin-top: 2px;
      button {
        width: 100%;
        height: 40px;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        border-radius: 20px;

        &:nth-of-type(1) {
          background-color: #e60023;
          &:hover {
            filter: brightness(95%);
          }
        }
        &:nth-of-type(2) {
          position: relative;
          background-color: #1877f2;
          &:hover {
            filter: brightness(95%);
          }
          img {
            position: absolute;
            left: 12px;
            top: 50%;
            transform: translateY(-50%);
          }
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
        font-weight: 600;
        color: #111;
        a:hover {
          text-decoration: underline;
        }
      }
      button {
        font-size: 1.2rem;
        color: #111;
        width: 100%;
        text-align: center;
      }
    }
  }

  .businessWrap {
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

SignUp.propTypes = {
  toggleSignUp: PropTypes.func.isRequired,
};
