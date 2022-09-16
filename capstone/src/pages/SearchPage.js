import React from 'react'
import Channel from '../components/Channel'
import DetailHeader from '../components/DetailHeader'
import Header from '../components/Header'

const SearchPage = () => {
  return (
      <div style={{background:"#E1E1E1",height:"100%"}}>
          <DetailHeader />  
          <Channel></Channel>    
    </div>
  )
}

export default SearchPage