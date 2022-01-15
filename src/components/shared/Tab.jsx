import React from "react";
import styled from "styled-components";

function TabMenu() {
  return (
    <TabNav>
      <TabNavList>
        <li className="nav_btn">
          <a href="#home" className="nav_link">
            <img src="/assets/icon/icon-home.png" alt="home icon" />
            <span>홈</span>
          </a>
        </li>
        <li className="nav_btn">
          <a href="#chat" className="nav_link">
            <img src="/assets/icon/icon-message-circle.svg" alt="chat icon" />
            <span>채팅</span>
          </a>
        </li>
        <li className="nav_btn">
          <a href="#edit" className="nav_link">
            <img src="/assets/icon/icon-edit.png" alt="upload icon" />
            <span>게시물 작성</span>
          </a>
        </li>
        <li className="nav_btn">
          <a href="/profile" className="nav_link">
            <img src="/assets/icon/icon-user.png" alt="profile icon" />
            <span>프로필</span>
          </a>
        </li>
      </TabNavList>
    </TabNav>
  );
}

const TabNav = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  min-width: 390px;
  box-sizing: border-box;
  padding: 14px 33px;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
`;

const TabNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  .nav_link {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 84px;
  }

  .nav_link > img {
    display: block;
    width: 24px;
    height: 24px;
  }

  .nav_link > span {
    display: block;
    font-size: 10px;
    text-align: center;
    padding: 6px 0;
  }
`;

export default TabMenu;

/*

.nav_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  */
