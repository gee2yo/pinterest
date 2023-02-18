/* eslint-disable no-plusplus */
import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/bottom/SignUp";
import Business from "../components/bottom/Business";

export default function Bottom() {
  const [viewPerson, setViewPerson] = useState(true);

  const toggleSignUp = () => {
    setViewPerson(!viewPerson);
  };

  const botImgRendering = () => {
    const result = [];
    for (let i = 1; i <= 28; i++) {
      result.push(
        <div className="imgFrame">
          <img
            src={`${process.env.PUBLIC_URL}/images/botImg/botImg${i}.jpeg`}
            alt={`배경이미지${i}`}
          />
        </div>
      );
    }
    return result;
  };

  return (
    <StyledBottom className="bottom">
      <div className="bottom-wrap">
        <article className="bottom-left">
          <p>가입하여 더 많은 아이디어를 만나 보세요</p>
        </article>
        <article className="bottom-right">
          {viewPerson ? (
            <SignUp toggleSignUp={toggleSignUp} />
          ) : (
            <Business toggleSignUp={toggleSignUp} />
          )}
        </article>
      </div>
      <div className="bgImg">
        <div className="bgBlack" />
        <div className="bgWrap">{botImgRendering()}</div>
      </div>
    </StyledBottom>
  );
}

const StyledBottom = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
  overflow: hidden;

  .bottom-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .bottom-left {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 7rem;
      font-weight: 600;
      word-break: keep-all;
      background-color: transparent;
      p {
        width: 426px;
        color: #fff;
      }
    }

    .bottom-right {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .bgImg {
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    z-index: -1;

    .bgWrap {
      margin-top: 8px;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      .imgFrame {
        width: 236px;
        height: 350px;
        border-radius: 16px;
        overflow: hidden;
        margin: 8px;

        &:nth-child(2),
        &:nth-child(9),
        &:nth-child(16),
        &:nth-child(23),
        &:nth-child(6),
        &:nth-child(13),
        &:nth-child(20),
        &:nth-child(27) {
          transform: translateY(-50%);
        }

        &:nth-child(3),
        &:nth-child(10),
        &:nth-child(17),
        &:nth-child(24),
        &:nth-child(5),
        &:nth-child(12),
        &:nth-child(19),
        &:nth-child(26) {
          transform: translateY(-75%);
        }

        &:nth-child(4),
        &:nth-child(11),
        &:nth-child(18),
        &:nth-child(25) {
          transform: translateY(-16.67%);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
