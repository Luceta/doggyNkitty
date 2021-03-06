import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./HeaderBox";

function TopMainNav({ children }) {
  return (
    <HeaderBox>
      <TopSearchTitle>{children}</TopSearchTitle>
      <SearchBox>
        <Link to="/search">
          <img src="/assets/icon/icon-search.png" alt="search logo" />
        </Link>
      </SearchBox>
    </HeaderBox>
  );
}

const TopSearchTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  padding: 13px 0;
`;

const SearchBox = styled.div`
  padding: 16px 0px;
`;

export default TopMainNav;
