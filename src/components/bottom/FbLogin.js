import React from "react";
import FacebookLogin from "react-facebook-login";

export default function FbLogin() {
  return;
  <FacebookLogin
    appId={`${process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}`}
    fields="name,email,picture"
    callback={handleSuccessFacebookLogin}
    render={(renderProps) => (
      <SocialLoginButtons onClick={renderProps.onClick}>
        <Icon
          src="/images/icons/facebook_icon"
          extension="png"
          size={["22px", "22px"]}
        />
        {t("social.facebook")}
      </SocialLoginButtons>
    )}
  />;
}
