import React, { useState,useEffect,useCallback } from 'react'
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
  const [data, setData] = useState([])
 
 // useEffect(() => {
  //     const fetch = async () => {
  //       try {
      
  //         const response = await axios.get(
  //           `http://34.64.56.32:5000/channels2?q=${keyword}&maxResults=5`, null, {
  //             headers: {
               
  //               "Access-Control-Allow-Origin":"*",
  //             }
  //           }
  //           , 
  //         )
  //         console.log(response.data)
          
  //         setData(response.data.items)
        
  //       }
  //      catch (error) {
  //         console.log(error)
  //       }
  //     }
  //       fetch();
  // }, [keyword])
  function keyboardCheck () {
      

    
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
            console.log(response.data)
            
            setData(response.data.items)
          
          }
         catch (error) {
            console.log(error)
          }
        }
    fetch()
      
  }
  const useDebouncedEffect = (func,delay, deps) => {
    console.log("빙빙")
    const callback = useCallback(func,deps)
    useEffect(()=>{
      const timer = setTimeout(()=>{
        callback()
      },delay);
    return () => {
      clearTimeout(timer);
    }
    },[callback,delay])
    console.log("끝")
  }
  useDebouncedEffect(keyboardCheck,800,[keyword])
 
  return (
    <Main onClick={() => 
      modal==true && setModal(false)
      }>
      
   
      <Search onClick={()=>setModal(!modal)}>
          <div style={{display:"flex",width:"80%",alignItems:"center"}}>
          
          <SearchInput placeholder='분석하고 싶은 유튜브 채널이름을 검색해주세요' onChange={(e)=>
          
            setKeyword(e.target.value)
            }/>
          </div>
        
          <SearchButton onClick={()=>navigate("/search")}><Icon src={SearchIcon} /></SearchButton>
    </Search>
     
      {
        modal ?      <Box>
        {data.length>1 ? <div>{
            data.map((e,index) => {
                 return (
                   <Flex key={index} onClick={() => navigate('/search', {
                     state: {
                         youtubers: e.channelId,
                         channelName: e.channelname,
                         thumbnail:e.thumbnail
                       }
                     })}>
                         <img referrerPolicy="no-referrer" style={{ "width": 60, "height": 60, "borderRadius": 30, "marginRight": 20}} src={e.thumbnail}/>
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

margin-top:10%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const Search = styled.div`
background:white;
display:flex;
justify-content:space-between;
align-items:center;


width:60%;
height:50px;
border: 1px solid #6667AB;
padding: 0px 0px 0px 10px;
border-radius:17px;
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
border-radius: 0 17px 17px 0;
width:60px;
height:50px;
display:flex;
justify-content:center;
align-items:center;
font-size:18px;
font-weight:700;
color:#FFFFFF;
cursor:pointer;
`
const Box = styled.div`
  width:60%;
  position:absolute;
  height:50%;
  top:30%;
  background-color: white;
  overflow-y: auto;
  z-index:99999;
  display:flex;
  justify-content: flex-start;
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