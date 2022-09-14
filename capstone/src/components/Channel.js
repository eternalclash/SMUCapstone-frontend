import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import he from 'he'
import RingLoader from 'react-spinners/RingLoader'
import More from '../images/More.png'
import ViewIcon from '../images/View Icon.png'
import CommentsIcon from '../images/Comments Icon.png'
import { useNavigate,useLocation } from 'react-router-dom'

const Channel = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const location = useLocation()
  const [notFind,setNotFind] = useState()
  useEffect(() => {
    const fetch = async () => {
    
      try {
        console.log(location.state.youtubers)
        const response = await axios.get(
          `http://34.64.56.32:5000/contents?channelId=${location.state.youtubers}&fromDB=1`, null, {
            headers: {
             
              "Access-Control-Allow-Origin":"*",
            }
          }
          , 
        )
        console.log(response.data)
        console.log(response.data.data)
        response.data.data.map((e,index)=>e.video_name=he.decode(e.video_name) 
        )
        response.data.data.map((e,index)=> e.video_name= e.video_name.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, ''))
        console.log(response.data.data)
        setData(response.data.data)

        const response2 = await axios.get(
          `http://34.64.56.32:5000/youtubers`
        )
        console.log(response2)
       
      }
      
     catch (error) {
        console.log(error)
        setNotFind(location.state.channelName)
      }
    }
      fetch();
}, [])

    return (
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: 'center' }}>
        {
          data ? 
            data.map((e, idx) => {
              return(
            <div style={{ margin: "0 20px 30px 20px", cursor:"pointer"}} onClick={()=>navigate("/detail",{state:{
               thumbnail:location.state.thumbnail,
               channelName:location.state.channelName,
               youtubers:location.state.youtubers,
               videoId: e.id
            }})}>
            <MainImage src={e.thumbnail.split('/')[0]+'//'+e.thumbnail.split('/')[2]+'/'+e.thumbnail.split('/')[3]+'/'+e.thumbnail.split('/')[4]+'/hq720.jpg'}/>
           <Main>
                    <Info>
                        <Icon src={ViewIcon} />{e.hits}
                        <Icon src={CommentsIcon}/> {e.comment_num}
                    </Info>
                    <div style={{ marginTop: "10px"}}></div>
                    <MainText>{e.video_name}</MainText>
                    <MainText>{}</MainText>
          </Main>
      
      
          </div>
            )
          })
       
          
            :
            <ErrorFind>
               <RingLoader
          color="black"
          height={30}
          width={30}
          radius={2}
          margin={2}
        />
              <div style={{marginTop:"30px",fontSize:"22px"}}>로딩중입니다. 잠시만 기다려주세요</div>

            
              </ErrorFind>
         }
  {
data && <div style={{ margin: "0 20px 30px 20px", cursor:"pointer"}} onClick={()=>navigate("/")}>
<MainImage src={More}/>
<Main>
        <Info>

        </Info>
        <div style={{ marginTop: "10px"}}></div>
        <MainText>더 많은 {location.state.channelName}동영상은 준비 중입니다.</MainText>
       
</Main>
</div> 
  }

          
     
        </div>
        
   
  )
}

const Home = styled.div`
position:fixed;
right:2%;
bottom:3%;
width:100px;
height:100px;
background-color:blue;
border-radius:50%;
`

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
const ErrorFind = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:17px;
margin-top:10em;
width:50em;
height:29em;
background-color:white;

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