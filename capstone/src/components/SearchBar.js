import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '../images/Search Icon.png'
import { useNavigate } from 'react-router-dom'
const SearchBar = () => {
  const [keyword, setKeyword] = useState("")
  const navigate = useNavigate()
  return (
      <Search>
          <div style={{display:"flex",width:"80%",alignItems:"center"}}>
          <Icon src={SearchIcon} />
          <SearchInput placeholder='분석하고 싶은 유튜브 채널이름을 검색해주세요' onChange={(e)=>setKeyword(e.target.value)}/>
          </div>
        
          <SearchButton onClick={()=>navigate("/search")}>시작하기</SearchButton>
    </Search>
  )
}

const Search = styled.div`
background:white;
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
top:35%;
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
export default SearchBar