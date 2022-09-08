import React from 'react'
import Header from '../components/Header'
import MainBody from '../components/MainBody'
import BottomImage from '../components/BottomImage'
import SearchBar from '../components/SearchBar'
const MainPage = () => {
  return (
      <div style={{ }}>
          <Header />
          <MainBody />
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <BottomImage/>
          </div>

    </div>
  )
}

export default MainPage