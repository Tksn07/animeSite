import React, { useEffect } from "react";
import styled from "styled-components";

const DemoPage = () => {
  return <PageWrapper>PANE 1</PageWrapper>;
};

export default DemoPage;

const PageWrapper = styled.div`
  height: 200px;
  background-color: gray;
  border: 20px solid;
  box-sizing: border-box;
`;
