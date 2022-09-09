import React, { useEffect,useState } from 'react'
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
import axios from 'axios'
const DetailBody = () => {
        const [data,setData] = useState()
        const [keyword,setKeyword] = useState()
        const [comment,setComment] = useState([])
        useEffect(() => {
                const fetch = async () => {
                  try {
               
                    const response = await axios.get(
                      `http://34.64.56.32:5000/analyze`, null, {
                        headers: {
                         
                          "Access-Control-Allow-Origin":"*",
                        }
                      }
                      , 
                    )
                    console.log(response.data.bigdata.comments)
                    let sortobj = [];
                    for (let number in response.data.bigdata.comments) {
                        sortobj.push([number,response.data.bigdata.comments[number]])
                    }
                    sortobj=sortobj.sort(function(a,b) {
                        return  b[1] - a[1]
                    })
                    console.log(response.data)
                    setKeyword(sortobj)
                
                    setData(response.data)
            
                //     console.log(response.data.timestamp[0].Object.keys(response.data.timestamp[0])[0].comments)
                  }
                 catch (error) {
                    console.log(error)
                  }
                }
                  fetch();
            }, [])
  return (
        data?
      <Grid>
       <One pict={data.thumbnail.url}>
       
       </One>
              
              <LikeComment>
              <DetailHead>
                      <DetailHeadImage src={Like} />   
                      <DetailHeadText>
                      긍정적인 댓글
                      </DetailHeadText>
                     
                      <DetailHeadText2>
                       VS
                      </DetailHeadText2>
                      <DetailHeadImage src={Dislike} />   
                      <DetailHeadText>
                      부정적인 댓글
                      </DetailHeadText>
                     
              
                     
              </DetailHead>
              <ProgressBar>
              
               <Progress percent={data.sentimental.pos}>
                {data.sentimental.pos}%
                </Progress>
                <Progress2 percent={data.sentimental.neg}>
                {data.sentimental.neg}%
                </Progress2>
              </ProgressBar>
              </LikeComment>    
             
 
       
          <KeywordComment> 
                    
                      <Half>  <Flex>
                      <DetailHeadImage src={BigData} />   
                      <DetailHeadText>
                      빅데이터를 통해 알아보는 키워드
                      </DetailHeadText>
                        </Flex>
                        <DetailImage3 referrerPolicy="no-referrer" src={data.bigdata.image}/>
                        </Half>
                    
                      <Half> 
                        <Flex>
                        <DetailHeadImage src={Most} />   
                      <DetailHeadText>
                      가장 많이 등장한 단어
                      </DetailHeadText>
                        </Flex>
                        {  
                                
                  
                                keyword.map((e,index)=>{
                                        if (index<5)
                                        return (

                                                <div style={{fontSize:25,marginBottom:"10px"}}>
                                                   {index+1}.{e[0]} {e[1]}회
                                                </div>
                                        )
                                })
                             
                        }
                     
                     </Half>
                     
             
          </KeywordComment>    
           
         
              <RecommendVideo>
              <DetailHead>
                      <DetailHeadImage src={Gift} />   
                      <DetailHeadText>
                      추천하는 연관동영상
                      </DetailHeadText>
                     
                  </DetailHead>
               <DetailImage2  src={data.recommend[0].thumb} onClick={()=> window.open(`${data.recommend[0].url}`,'_blank')}/> 
                        
            <DetailImage2 src={data.recommend[1].thumb} onClick={()=> window.open(`${data.recommend[1].url}`,'_blank')}/>       
 
              
               
            </RecommendVideo>
            <KeywordComment> 
                    
                    <Half>  <Flex>
                    <DetailHeadImage src={BigData} />   
                    <DetailHeadText>
                   가장 많이 언급된 구간
                    </DetailHeadText>
                      </Flex>
                      {
                        data.timestamp.map((e,index)=>{
                                return(
                                        <div style={{fontSize:25,marginBottom:"10px",cursor:"pointer"}} onClick={()=>{
                                        setComment(data.timestamp[index][Object.keys(e)].comments)
                                        }}>
                                         {Object.keys(e)}분
                                        </div>
                                )
                        })
                      }
                      </Half>
                  
                    <Half> 
                      <Flex>
                      <DetailHeadImage src={Most} />   
                    <DetailHeadText>
                    구간에 대한 댓글
                    </DetailHeadText>
                      </Flex>
                      {  
                              
                
                              comment.map((e,index)=>{
                                      if (index<5)
                                      return (

                                              <div style={{fontSize:25,marginBottom:"10px"}}>
                                                {e}
                                              </div>
                                      )
                              })
                           
                      }
                   
                   </Half>
                   
           
        </KeywordComment>    
           
        
    </Grid>
    :
    <Grid>
    </Grid>
  )
}
const One = styled.div`
background-image:url(${(props)=>(props.pict)});
background-size:cover;
border-radius:17px;
`
const Grid = styled.div`
  margin-top:10px;
  width:100%;
  height:50em;
  display:grid;
  z-index:99999;
  grid-template-rows: 250px 300px 250px ;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;
`

const ProgressBar = styled.div`
width: 80%;
height: 100px;
background-color: black;
font-weight: 600;
font-size: 30px;
display:flex;
margin-top:5%;
align-items:center;

`
const Half = styled.div`
width:50%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
`

const Progress = styled.div`
    width: ${(props)=> (props.percent)}%;  
    height: 100px;
    padding: 0;
    text-align: center;
    background-color: #4F98FF;
    color: #111;
    display:flex;
    justify-content:center;
    align-items:center;

`
const Progress2 = styled.div`
width: ${(props)=> (props.percent)}%;  
    height: 100px;
    padding: 0;
    text-align: center;
    background-color: black;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
`

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
justify-content:space-between;
align-items:center;
flex-direction:row;
text-align:center;
margin-top:10px;
`
const DetailHeadImage = styled.img`
width:30px;
height:30px;
margin: 0px 10px;
`
const DetailHeadText = styled.div`
justify-content:center;
align-items:center;
display:flex;
font-size:18px;
font-weight:700;
`
const DetailHeadText2 = styled.div`
justify-content:center;
align-items:center;
display:flex;
font-size:30px;
padding-left:10px;
font-weight:700;
color:red;
`

const DetailImage = styled.img`
background-size:cover;
border-radius:15px;
`
const DetailImage2 = styled.img`
width:100%;
height:45%;
margin:10px 0px;
border-radius:15px;
cursor:pointer;
`
const DetailImage3 = styled.img`

height: 220px;
border-radius:15px;
`
const LikeComment = styled.div`
background:#FFFFFF;
grid-column:2/4;
display:flex;
justify-content:flex-start;
align-items:center;
z-index:99;


border-radius:15px;
flex-direction:column;
`
const KeywordComment = styled.div`
background:#FFFFFF;
display:flex;
align-items:flex-start;
grid-column:1/3;
z-index:99;


border-radius:15px
`

const RecommendVideo = styled.div`
background:#FFFFFF;
display:flex;
flex-direction:column;
align-items:flex-start;
z-index:99;
grid-column:3/4;
grid-row:2/4;
border-radius:15px
`


export default DetailBody