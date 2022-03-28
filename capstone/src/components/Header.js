import React from 'react'
import styled from 'styled-components'
import Logo from '../images/Youtube Logo.png'
const Header = () => {
  return (
    <Main>
          <Left>
          <LeftIcon src={Logo}/>
          <LeftText>유튜브 댓글 분석기</LeftText>
          </Left>
          <Right>
          <RightText>My</RightText>
          <RightText>탐색하기</RightText>
          <RightText>로그인</RightText>     
          </Right>
 
    </Main>
  )
}
const Main = styled.div`
display:flex;
justify-content:space-between;
aling-items:center;
height:50px;
padding: 0px 10px;
background:#FFFFFF;
`
const Left = styled.div`
display:flex;
justify-content:space-around;
align-items:center;

`
const LeftText = styled.div`
font-size:21px;
font-weight:700;
`
const LeftIcon = styled.img`
width:40px;
height:40px;
margin-right:10px;
`
const Right = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`
const RightText = styled.div`
margin-left:20px;
font-size:21px;
font-weight:700;


`


export default Header