import React from 'react'
import Paik from '../images/PAIK Background.png'
import SBS from '../images/SBS Background.png'
import Grandma from '../images/Grandma Background.png'
import styled from 'styled-components'
const BottomImage = () => {
    return (
        <div style={{display:"flex",position:"absolute",bottom:0,width:'100%'}}>
          <MainImage src={Paik}/>
          <MainImage src={SBS}/>
          <MainImage src={Grandma}/>
    </div>
  )
}
const MainImage = styled.img`
height: 230px;
width:33.333%;
`
export default BottomImage