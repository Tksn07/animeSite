import { ListItem, List } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import log from "../../img/common/logo_v.png"

const Header = () => {
  return (
    <div>
      <h1>
        <Logo>
          <Link to="home" />
          <div>こんにちは</div>
        </Logo>
      </h1>
      <List>
        <ListItem>
          <span>映画メニュー</span>
        </ListItem>
      </List>
      <div></div>
    </div>
  )
}

export default Header

const Logo = styled.div`
  background: url(${log})
`