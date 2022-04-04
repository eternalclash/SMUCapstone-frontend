import React from 'react'
import styled from 'styled-components'
import image1 from '../images/PAIK 1 Image.png'
import image2 from '../images/PAIK 2 Image.png'
import image3 from '../images/PAIK 3 Image.png'
import image4 from '../images/PAIK 4 Image.png'
import image5 from '../images/PAIK 5 Image.png'
import image6 from '../images/PAIK 6 Image.png'
import ViewIcon from '../images/View Icon.png'
import CommentsIcon from '../images/Comments Icon.png'
import { useNavigate } from 'react-router-dom'
const Channel = () => {
    const navigate = useNavigate()
    return (
        <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:'center'}}>
            <div style={{ margin: "0 20px 30px 20px", cursor:"pointer"}} onClick={()=>navigate("/detail")}>
            <MainImage src={image1}/>
           <Main>
                    <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>분식집st 떡볶이</MainText>
                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            <div style={{ margin: "0 20px 30px 20px"}}>
            <MainImage src={image2}/>
           <Main>
           <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>불맛 가득한 달걀볶음밥!</MainText>
                    <MainText>맛없으면 이상한 거죠~</MainText>

                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            <div style={{ margin: "0 20px 30px 20px"}}>
            <MainImage src={image3}/>
           <Main>
           <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>참 쉬운 김밥만들기, 김밥 A~Z까지~!</MainText>
                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            <div style={{ margin: "0 20px 30px 20px"}}>
            <MainImage src={image4}/>
           <Main>
           <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>김치전을 바삭바삭하게!</MainText>
                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            <div style={{ margin: "0 20px 30px 20px"}}>
            <MainImage src={image5}/>
           <Main>
           <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>정말 시원한 멸치국수!</MainText>
                    <MainText>육수, 양념장 고명에 뽀나스 메뉴는 비밀~</MainText>
                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            <div style={{ margin: "0 20px 30px 20px"}}>
            <MainImage src={image6}/>
           <Main>
           <Info>
                        <Icon src={ViewIcon} />7.6M
                        <Icon src={CommentsIcon}/> 4.0M
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>냉동만두 쉽게 굽기</MainText>
                    <MainText>사리는 거 아닙니다!ㅎㅎㅎ</MainText>
                    <MainText>백종원의 쿠킹로그</MainText>
          </Main>
            </div>
            
        </div>
        
   
  )
}

const Main = styled.div`
width:350px;
height:120px;
background:#FFFFFF;
border-radius: 0px 0px 17px 17px;
`
const MainImage = styled.img`
width:350px;
height:200px;
`
const Info = styled.div`
width:100%;
height:30px;
display:flex;
justify-content:flex-end;
align-items:center;

`
const MainText = styled.div`
font-size:17px;
font-weight:700;
display:flex;
justify-content:center;
align-items:center;
`
const Icon = styled.img`
width:21px;
height:16px;
margin:0 5px;
`

export default Channel