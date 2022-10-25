import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TodoCard } from "../../molecules/TodoCard";

interface AccessHeader {
  accessToken: string;
}

const Example = ({ accessToken }: AccessHeader) => {
  const [todoItems, setTodoItems] = useState<any[]>();
  const [taskListId, setTaskListId] = useState<string>();
  const [taskId, setTaskId] = useState<number>();
  const [taskTitle, setTaskTitle] = useState<string>();

  // request headerを作成
  const init: RequestInit = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  // todoリストを取得する
  const fetchUser = async (init: RequestInit) => {
    // taskのリストを取得
    const res = await fetch(
      "https://tasks.googleapis.com/tasks/v1/users/@me/lists",
      init
    )
      .then((res) => {
        return res.json();
      })
      .catch((res) => {
        console.log("エラーが起きたよ！", res);
      });

    // TODOを入れるタスクのIDを取得
    setTaskListId(res.items[0].id);

    // TODO listを取得
    const taskRes = await fetch(
      `https://tasks.googleapis.com/tasks/v1/lists/${taskListId}/tasks`,
      init
    ).then((res) => {
      return res.json();
    });
    return taskRes.items;
  };

  useEffect(() => {
    console.log("取得してきます！");
    fetchUser(init).then((data) => {
      setTodoItems(data);
    });
    console.log("取得してきました！");
  }, [accessToken]);
  console.log(todoItems);
  console.log(accessToken);

  // 追加処理
  const handleAddClick = () => {
    console.log("動いてるよ");
    // request headerを作成
    const createInit: RequestInit = {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ title: taskTitle }),
    };

    const create = async (init: RequestInit) => {
      console.log(taskListId);

      const res = await fetch(
        `https://tasks.googleapis.com/tasks/v1/lists/${taskListId}/tasks`,
        init
      ).then((res) => {
        return res.json();
      });

      return res;
    };
    create(createInit);
    setTaskTitle("");
    return;
  };

  // 削除処理
  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
    return;

    const deleteInit: RequestInit = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    const deleteRes = async (init: RequestInit) => {
      const res = await fetch(
        `https://tasks.googleapis.com/tasks/v1/lists/${taskListId}/tasks/${taskId}`,
        init
      ).then((res) => {
        return res.json();
      });

      return res;
    };

    return deleteRes(deleteInit);
  };

  return (
    <Body>
      <PageTitle>TODOリスト</PageTitle>
      <div>
        <InputBlock>
          <TextField
            label="タスク名を入力してください"
            sx={{ width: "27ch" }}
            variant="standard"
            onChange={(e) => {
              setTaskTitle(e.target.value);
              console.log(taskTitle);
            }}
          />
          <AddButton>
            <Button variant="outlined" color="primary" onClick={handleAddClick}>
              追加
            </Button>
          </AddButton>
        </InputBlock>
      </div>

      {todoItems &&
        todoItems.map((todoItem) => {
          return (
            <TodoCardWrapper>
              <TodoCard
                text={todoItem.title}
                handleDeleteClick={handleDeleteClick}
              />
            </TodoCardWrapper>
          );
        })}
    </Body>
  );
};

export default Example;

const Body = styled.div`
  margin-left: 40px;
`;

const PageTitle = styled.h1`
  margin-bottom: 40px;
`;

const TodoCardWrapper = styled.div`
  margin: 16px 0px;
`;

const AddButton = styled.div`
  margin-left: 16px;
`;

const InputBlock = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 36px;
`;
