import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'
const MainBody = () => {
  return (
      <Main>
      <SearchBar/>    
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

export default MainBody