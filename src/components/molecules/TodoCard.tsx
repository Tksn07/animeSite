import { Checkbox, Button } from "@mui/material";
import styled from "styled-components";

interface Content {
  text: string;
}

export const TodoCard = ({ text }: Content) => {
  const handleDeleteClick = () => {
    console.log("こんばんは");
  };

  return (
    <TaskCard>
      <CheckboxBlock>
        <CheckboxWrapper />
      </CheckboxBlock>
      <Text>{text}</Text>
      <DeleteButtonBlock>
        <DeleteButtonWrapper
          variant="outlined"
          color="error"
          onClick={handleDeleteClick}
        >
          削除
        </DeleteButtonWrapper>
      </DeleteButtonBlock>
    </TaskCard>
  );
};

const TaskCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 340px;
  background-color: #f5f6f6;
  border: 1px solid rgb(225, 232, 238);
  border-radius: 7px;
`;

const CheckboxBlock = styled.div`
  height: 60px;
  width: 60px;
`;

const CheckboxWrapper = styled(Checkbox)`
  width: 100%;
  height: 100%;
`;

const Text = styled.div`
  font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  flex-grow: 1;
`;

const DeleteButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 80px;
`;

const DeleteButtonWrapper = styled(Button)``;
