# doggyNkitty
강생이와 고냉이 - 고양이와 강아지의 애견 용품을 판매하는 마켓 사이트 입니다.


## **💡 Motivation**

- 팀 프로젝트이지만,  홀로 프로젝트를 이어나가기 위해 혼자서 모든 부분을 구현했습니다.



## 📃  Design & requirement 

<a href="https://paullabworkspace.notion.site/SNS-cdd5ed88a24b499593d7081dc28a5cbc"> 프로젝트 설명 및 요구 사항</a>
<a href="http://146.56.183.55:3000/"> 베타 링크</a>


## 📃  시연 영상

![디자인 변경 시연.gif](https://im4.ezgif.com/tmp/ezgif-4-7a27d3d637.gif)


## 💻Stacks

- Javascript(es5),React, Redux
- Backend -> 제주코딩베이스캠프에서 지원

## ⛏Features
- 로그인, 로그아웃 및 회원가입
- 프로필 설정, 수정 기능
- 게시글 CRUD
- 댓글 CRUD
- 상품 CUD
- 좋아요 기능
- 팔로우, 언팔로우 기능
- 유저 검색 기능

## Challenge

- ### React
프로젝트를 진행하면서 리액트의 장점이 컴포넌트의 재 사용성이 있었으나, 개발 하면서 재 사용될 컴포넌트가 그리 많지 않다는 것을 느꼇습니다. 개발 하면서 이 부분에 대해서 고민하였고, Container-Presenter 패턴 을 사용 해서 (Presentation)과 비지니스 로직 컴포넌트(Container)를 구분해서 작업했습니다. 
비지니스 로직과 뷰를 담당하는 부분을 나누면서 재사용성을 높일 수 있는 점이 확실히 체감 되었습니다.

- ### Redux
프로젝트를 진행하면 유저정보를 받아와서 로그인인증을 하는 과정에서 새로고침을 하면 전역 스토어가 날라감에 따라 localstorage를 활용할 수 잇는 redux-persist를 활용하여 유저의 인증을 그대로 가져가 페이지가 바뀜에도 상태가
날라가지 않도록 해주었습니다. 하지만, 로컬 스토리지를 활용하다보니 보안상 토큰과 유저정보가 노출되는 이슈가 있어서 이는 주의가 필요함을 느끼게 되었습니다.



