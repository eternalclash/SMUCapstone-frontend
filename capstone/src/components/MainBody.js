import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import SearchModal from './SearchModal'
import SearchIcon from '../images/Search Icon.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const MainBody = () => {
  const [modal, setModal] = useState(false)
  console.log(modal)
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  const [data, setData] = useState("hi")
 
  useEffect(() => {
      const fetch = async () => {
        try {
     
          const response = await axios.get(
            `http://34.64.56.32:5000/channels?q=${keyword}&maxResults=5`, null, {
              headers: {
               
                "Access-Control-Allow-Origin":"*",
              }
            }
            , 
          )
          console.log(response.data.items)
          setData(response.data.items)
        }
       catch (error) {
          console.log(error)
        }
      }
        fetch();
  }, [keyword])
  return (
    <Main onClick={() => 
      modal==true && setModal(false)
      }>
      
   
      <Search onClick={()=>setModal(!modal)}>
          <div style={{display:"flex",width:"80%",alignItems:"center"}}>
          <Icon src={SearchIcon} />
          <SearchInput placeholder='분석하고 싶은 유튜브 채널이름을 검색해주세요' onChange={(e)=>setKeyword(e.target.value)}/>
          </div>
        
          <SearchButton onClick={()=>navigate("/search")}>시작하기</SearchButton>
    </Search>
     
      {
        modal ?      <Box>
        {data ? <div>{
            data.map((e,index) => {
                 return (
                   <Flex onClick={() => navigate('/search', {
                     state: {
                         youtubers: e.channelId
                       }
                     })}>
                         <img style={{ "width": 60, "height": 60, "borderRadius": 30, "marginRight": 20}} src={e.thumbnail}/>
                         {e.channelname}
                         </Flex>
              )
          })  
        }
         
        </div>

            : null
         
        }

        
  </Box>: null
      }
      
    </Main>
  )
}

const Main = styled.div`
background-color:black;
height:40em;
display:flex;
justify-content:center;
align-items:center;
`
const Search = styled.div`
background:white;
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
top:20%;
width:60%;
height:50px;
border: 3.5px solid #4187C8;
padding: 0px 10px;
`
const Icon = styled.img`
width:25px;
height:25px;
`
const SearchInput = styled.input`
width:100%;
height:30px;
border:none;
font-size:18px;
margin-left:10px;
`

const SearchButton = styled.div`
background: #4187C8;
border-radius: 5px;
width:116px;
height:37px;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
font-weight:700;
color:#FFFFFF;
cursor:pointer;
`
const Box = styled.div`
  width:auto;
  position:fixed;
  height:50%;
  top:30%;
  background-color: white;
  overflow-y: auto;
  z-index:99999;
  display:flex;
  justify-content: center;
`
const Flex = styled.div`
display:flex;
align-items: center;
margin: 10px 0;
padding:5px;
font-size:20px;
cursor: pointer;
`
export default MainBody