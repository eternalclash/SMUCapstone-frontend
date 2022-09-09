import React from 'react'
import styled from 'styled-components'
import Logo from '../images/Youtube Logo.png'
import PAIK from '../images/PAIK Image.png'
import { useNavigate,useLocation } from "react-router-dom"
const DetailHeader = () => {
    const navigate=useNavigate()
    const location = useLocation()
    console.log(location.state)
  return (
    <Main>
          <Left onClick={()=>navigate("/")}>
          <LeftIcon src={Logo}/>
          <LeftText>유튜브 댓글 분석기</LeftText>
          </Left>
          <Mid onClick={()=>navigate("/search",{
            state: {
              thumbnail:location.state.thumnail,
              channelName:location.state.channelName,
              youtubers:location.state.youtubers,
            }
          })}>
          <MidIcon referrerPolicy="no-referrer" src={location.state.thumbnail} />
          {location.state.channelName}
          </Mid>
          <Right>
    
          </Right>
 
    </Main>
  )
}
const Main = styled.div`
display:flex;
justify-content:space-between;
aling-items:center;
height:70px;
padding: 0px 10px;
background:#FFFFFF;
`
const Left = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
cursor:pointer;
`
const LeftText = styled.div`
font-size:21px;
font-weight:700;
`
const LeftIcon = styled.img`
width:40px;
height:40px;
border-radius:17px;
margin-right:10px;
`
const Mid = styled.div`
font-size:21px;
font-weight:700;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`
const MidIcon = styled.img`
width:60px;
height:60px;
margin-right:10px;
border-radius:50%;
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


export default DetailHeader