import React, { useEffect, useState } from "react";

// 더미 데이터와 동일하면 -> 로그인 시켜주고, 아니면 등록된 정보 아니라는 alert창 띄우기
const User = {
  email: "choijiee0614@gmail.com",
  pw: "choijiee0614@@@",
};

export default function Login() {
  // state
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // email, pw, 형식 체크 -> js 정규 표현식 사용
    const regex =
      // eslint-disable-next-line
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      // 정규 표현식으로 test 해봤는데 -> true가 리턴되면
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPw(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert("로그인에 성공했습니다");
    } else {
      alert("등록되지 않은 회원입니다");
    }
    // value로 넣은 email 값 === 더미데이터 email과 동일한지 확인
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false); // email, pw 모두 유효하면 -> 활성화
      return;
    }
    setNotAllow(true); // 기본적으로는 비활성화
  }, [emailValid, pwValid]);
  // state값 변화 일어날 때마다 -> 버튼 활성화 여부 체크

  return (
    <div className="page">
      <div className="titleWrap">
        이메일과 비밀번호를
        <br />
        입력해주세요
      </div>
      <div className="contentWrap">
        {/* 이메일 */}
        <div className="inputTitle">이메일 주소</div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="errorMessageWrap">
          {
            !emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요</div>
            )
            // email 무효할 때 + 아무것도 입력하지 않았을 때 -> 에러 div 띄워주겠다
          }
        </div>
        {/* 비밀번호 */}
        <div className="inputTitle">비밀 번호</div>
        <div className="inputWrap">
          <input
            type="password" // 입력할 때 안 보이게 해준다
            className="input"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            value={pw}
            onChange={handlePassword}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
          )}
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bottomButton"
          disabled={notAllow}
          onClick={onClickConfirmButton}
        >
          확인
        </button>
      </div>
    </div>
  );
}
