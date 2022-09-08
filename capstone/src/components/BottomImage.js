import React from 'react'
import Paik from '../images/PAIK Background.png'
import SBS from '../images/SBS Background.png'
import Grandma from '../images/Grandma Background.png'
import Add1 from '../images/Add Icon.png'
import Add2 from '../images/Add Icon (1).png'
import Play from '../images/Play Icon.png'
import styled from 'styled-components'
const BottomImage = () => {
    return (
        <Main >
          <Left>
            <LeftFirstWord><img src={Add1} width='24em'/><div style={{paddingTop:'6px',marginLeft:'10px'}}>많이 분석한 채널</div></LeftFirstWord>
            <LeftDown>
              <ChannelImage src={SBS}/>
              <ChannelName>MBCkpop</ChannelName>
              <ChannelView><img src={Add2} width='20em'/><div style={{marginLeft:'5px'}}>9.82M</div></ChannelView>
            </LeftDown>
          </Left>
          <Right>
            <div style={{display:'flex', justfiyContent:'start',alignItems:'start'}}>
            <RightFirstWord><img src={Play} width='24em'/><div style={{paddingTop:'6px',marginLeft:'10px'}}>많이 분석한 동영상</div></RightFirstWord>
            </div>
            
            <RightDown>
              <RightImage src={SBS}/>
              <ChannelView2>
              <ChannelView2>예능연구소 4K 아이브 이서 직캠 'LOVE DIVE' (IVE LEESEO FANSCAM) @Show! MusicCore 220409</ChannelView2>
              </ChannelView2>
             
            </RightDown>
          </Right>

    </Main>
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
z-index:-1;
`
const Left = styled.div`
width:100%;
height:400px;

justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
`
const Right = styled.div`

height:400px;

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