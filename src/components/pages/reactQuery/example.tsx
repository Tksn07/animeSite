import { useEffect } from "react";

const fetchUser = async (init: RequestInit) => {
  const res = await fetch(
    "https://tasks.googleapis.com/tasks/v1/users/@me/lists",
    init
  );
  return res.json();
};

interface AccessHeader {
  accessToken: string;
}

const Example = ({ accessToken }: AccessHeader) => {
  // request headerを作成
  const init: RequestInit = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  useEffect(() => {
    fetchUser(init).then((data) => {
      console.log(data);
    });
  });

  return (
    <>
      <h1>ReactQuerySampleです。</h1>
    </>
  );
};

export default Example;
