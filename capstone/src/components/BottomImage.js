import React from 'react'
import Paik from '../images/PAIK Background.png'
import SBS from '../images/SBS Background.png'
import Grandma from '../images/Grandma Background.png'
import Add1 from '../images/Add Icon.png'
import Add2 from '../images/Add Icon (1).png'
import Play from '../images/Play Icon.png'
import styled from 'styled-components'
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from "react-router-dom"
import axios from 'axios'
const BottomImage = () => {
  const navigate = useNavigate()
  const [channel,setChannel] = useState()
  const [video,setVideo] = useState()
  useEffect(()=>{
    const fetch = async () => {
      try {
   
        const response = await axios.get(
          `http://34.64.56.32:5000/popular`, null, {
            headers: {
             
              "Access-Control-Allow-Origin":"*",
            }
          }
          , 
        )
        setChannel(response.data.channel)
        setVideo(response.data.video)
        console.log(response.data)
       
      }
     catch (error) {
        console.log(error)
      }
    }
      fetch();

  }
  
  ,[])
    return (
      channel&&video?
        <Main >
          <Left onClick={()=>
          navigate("/search",{
                         state: {
                          youtubers: channel.channelId,
                          channelName: channel.channelName,
                          thumbnail:channel.thumbnail
                        }
            }
            )
    
            }>
            <LeftFirstWord ><img src={Add1} width='24em'/><div style={{paddingTop:'6px',marginLeft:'10px'}}>많이 분석한 채널</div></LeftFirstWord>
            <LeftDown >
              <ChannelImage src={channel.thumbnail}/>
              <ChannelName>{channel.channelName}</ChannelName>
              <ChannelView><img src={Add2} width='20em'/><div style={{marginLeft:'5px'}}>{channel.channelHits}</div></ChannelView>
            </LeftDown>
          </Left>
          <Right
          onClick={()=>
            navigate("/detail",{
                           state: {
                            videoId: video.id,
                            channelName: video.channelInfo.channelName,
                            thumbnail:video.channelInfo.thumbnail
                          }
              }
              )
      
              }>
            <div style={{display:'flex', justfiyContent:'start',alignItems:'start'}}>
            <RightFirstWord><img src={Play} width='24em'/><div style={{paddingTop:'6px',marginLeft:'10px'}}>많이 분석한 동영상</div></RightFirstWord>
            </div>
            
            <RightDown>
              <RightImage src={video.thumbnail}/>
              <ChannelView2>
              <ChannelView2>{video.video_name}</ChannelView2>
              </ChannelView2>
             
            </RightDown>
          </Right>

    </Main>
    :
    <div>준비중입니다</div>
  )
}
const Main = styled.div`
background:#6667AB;
margin-top:10%;
display:grid;
grid-template-columns: 1fr 2fr;
width:80%;
height:25em;

align-items:center;
border-radius:17px;

`
const Left = styled.div`
width:100%;
height:400px;
cursor:pointer;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`
const Right = styled.div`

height:400px;
cursor:pointer;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`
const LeftFirstWord= styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:1.2em;
color:#FFFFFF;
margin-bottom:15px;
`
const RightFirstWord= styled.div`
display:flex;
justify-contents:center;
align-items:center;
font-size:1.2em;
color:#FFFFFF;
margin-bottom:15px;
`

const LeftDown=styled.div`

background:#FFFFFF;
width:80%;
height:70%;
display:flex;

align-items:center;
flex-direction:column;
border-radius:17px;
`
const RightDown=styled.div`

background:#FFFFFF;
width:80%;
height:70%;
display:flex;


justift-content:center;
flex-direction:column;
border-radius:17px;
`
const ChannelImage = styled.img`
border-radius:50%;
margin-top:35px;
width:7em;
height:7em;
z-index:999;
`
const RightImage = styled.img`

border-radius:17px 17px 0px 0px;

width:100%;
height:70%;

z-index:9999;
`

const ChannelName = styled.div`
margin-top:10px;
font-weight:700;
font-size:1.2em;
`

const ChannelView = styled.div`
margin-top:15%;
display:flex;
align-items:center;

`
const ChannelView2 = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
padding-top:10px;
text-align:center;
`

export default BottomImage