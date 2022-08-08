import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import image1 from '../images/PAIK 1 Image.png'
import image2 from '../images/PAIK 2 Image.png'
import image3 from '../images/PAIK 3 Image.png'
import image4 from '../images/PAIK 4 Image.png'
import image5 from '../images/PAIK 5 Image.png'
import image6 from '../images/PAIK 6 Image.png'
import ViewIcon from '../images/View Icon.png'
import CommentsIcon from '../images/Comments Icon.png'
import { useNavigate,useLocation } from 'react-router-dom'

const Channel = () => {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const location = useLocation()
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
        console.log(response.data.data)
        setData(response.data.data)

        const response2 = await axios.get(
          `http://34.64.56.32:5000/youtubers`
        )
        console.log(response2)
      }
      
     catch (error) {
        console.log(error)
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
            <div style={{ margin: "0 20px 30px 20px", cursor:"pointer"}} onClick={()=>navigate("/detail")}>
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
            <div>
              </div>
         }
          
            
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