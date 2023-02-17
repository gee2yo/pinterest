import React, { useState } from "react";
import styled from "styled-components";
import SignUp from "../components/bottom/SignUp";
import Business from "../components/bottom/Business";

export default function Bottom() {
  const [viewPerson, setViewPerson] = useState(true);

  const toggleSignUp = () => {
    setViewPerson(!viewPerson);
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
      <div className="bg">
        <div className="bg-wrap">
          <div className="columns col1">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col2">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col3">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col4">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col5">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col6">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
          <div className="columns col7">
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/botImg01.jpg`}
                alt="img1"
              />
            </div>
          </div>
        </div>
      </div>
    </StyledBottom>
  );
}

const StyledBottom = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.5);

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

  .bg {
    width: 100vw;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    z-index: -1;

    .bg-wrap {
      display: flex;

      .columns {
        display: flex;
        flex-direction: column;
        div {
          width: 236px;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          margin: 8px;
          &:first-child {
            margin-top: 16px;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .col2 {
        transform: translateY(-183px);
      }
    }
  }
`;
