import React from 'react'
import styled from 'styled-components'
import image1 from '../images/PAIK 1 Image.png'
import Like from '../images/Like Icon.png'
import Dislike from '../images/Dislike Icon.png'
import BigData from '../images/Data Icon.png'
import Most from '../images/Most Icon.png'
import Gift from '../images/Gift Icon.png'
import PAIK7 from '../images/PAIK 7 1mage.png'
import PAIK8 from '../images/PAIK 8 Image.png'
import PAIK9 from '../images/PAIK 9 Image.png'
import {useHistory} from "react-router"
const DetailBody = () => {
  return (
      <div>
          <Flex>
              <DetailImage src={image1}/>
              <LikeComment>
              <DetailHead>
                      <DetailHeadImage src={Like} />   
                      <DetailHeadText>
                      긍정적인 댓글
                      </DetailHeadText>
                     
              </DetailHead>
              </LikeComment>    
              <LikeComment>
              <DetailHead>
                      <DetailHeadImage src={Dislike} />   
                      <DetailHeadText>
                      부정적인 댓글
                      </DetailHeadText>
                     
              </DetailHead>
              </LikeComment>    
          </Flex>
          <Flex>
          <KeywordComment> <DetailHead>
                      <DetailHeadImage src={Most} />   
                      <DetailHeadText>
                      가장 많이 등장한 단어
                      </DetailHeadText>
                     
              </DetailHead></KeywordComment>    
              <KeywordComment>
              <DetailHead>
                      <DetailHeadImage src={BigData} />   
                      <DetailHeadText>
                      빅데이터를 통해 알아보는 키워드
                      </DetailHeadText>
                     
              </DetailHead></KeywordComment>    
          </Flex>
          <Flex>
              <RecommendVideo>
              <DetailHead>
                      <DetailHeadImage src={Gift} />   
                      <DetailHeadText>
                      추천하는 연관동영상
                      </DetailHeadText>
                     
                  </DetailHead>
                  <Flex2>
                  <DetailImage2 src={PAIK7}/>       
            <DetailImage2 src={PAIK8}/>       
            <DetailImage2 src={PAIK9}/>    
                  </Flex2>
               
            </RecommendVideo>
           
          </Flex>
    </div>
  )
}

const Flex = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin: 20px;
`
const Flex2 = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:100%;
margin-top:10px;
`
const DetailHead = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
margin-top:10px;
`
const DetailHeadImage = styled.img`
width:30px;
height:30px;
margin: 0 10px;
`
const DetailHeadText = styled.div`
justify-content:center;
align-items:center;
display:flex;
font-size:18px;
font-weight:700;
`

const DetailImage = styled.img`
width:30%;
height:230px;
border-radius:15px;
`
const DetailImage2 = styled.img`
width:25%;
height:180px;
border-radius:15px;
`
const LikeComment = styled.div`
background:#FFFFFF;
display:flex;
align-items:flex-start;
z-index:99;
width:30%;
height:230px;
border-radius:15px
`
const KeywordComment = styled.div`
background:#FFFFFF;
display:flex;
align-items:flex-start;
z-index:99;
width:47%;
height:230px;
border-radius:15px
`

const RecommendVideo = styled.div`
background:#FFFFFF;
display:flex;
flex-direction:column;
align-items:flex-start;
z-index:99;
width:100%;
height:230px;
border-radius:15px
`


export default DetailBody