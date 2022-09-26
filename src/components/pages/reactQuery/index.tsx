import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Example from "./example";
import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const ClientId = process.env.REACT_APP_CLIENT_ID!;

/**
 * 状態管理ライブラリReactQueryを使ってみるページです。
 */
const ReactQuerySample = () => {
  const queryClient = new QueryClient(); //QueryClientを宣言

  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    // ログイン処理
    const start = () => {
      gapi.client.init({
        clientId: ClientId,
        scope: "https://www.googleapis.com/auth/tasks",
      });
    };

    gapi.load("client:auth2", start);
  });

  const onSuccess = (
    res:
      | ReactGoogleLogin.GoogleLoginResponse
      | ReactGoogleLogin.GoogleLoginResponseOffline
  ) => {
    if ("accessToken" in res) {
      console.log(res.accessToken);
      setAccessToken(res.accessToken);
    }
  };

  const onFailure = () => {
    console.log("LOGIN FAILURE!");
  };

  return (
    <>
      <h1>ReactQuerySampleです。</h1>
      <div>
        <GoogleLogin
          clientId={ClientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true} //このフラグでユーザーサインインを保持できる
        />
      </div>
      <QueryClientProvider client={queryClient}>
        <Example accessToken={accessToken} />
      </QueryClientProvider>
    </>
  );
};

export default ReactQuerySample;
