
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const SearchModal = (props) => {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     const fetch = async () => {
    //       try {
    //         setData(null)
    //         const response = await axios.get(
    //           `http://34.64.56.32:5000/channels?q=안녕&maxResults=5`
    //         )
    //         console.log(response.data.items)
    //         setData(response.data.items)
    //       }
    //      catch (error) {
    //         console.log(error)
    //       }
    //     }
    //       fetch();
    // }, [])
    // useEffect(() => {
    //     const fetch = async () => {
    //       try {
    //         setData(null)
    //         const response = await axios.get (
    //           `http://34.64.56.32:5000/channels?q=안녕&maxResults=5`
    //         )
    //         console.log(response.data)
           
    //       }
    //       catch (error) {
    //         console.log(error)
    //       }
    //     }
    //       fetch();
  console.log(props.data)
    //   },[])
  return (
      <Box>
          {props.data ? <div>{
               props.data.map((e,index) => {
                   return (
                       <Flex>
                           <img style={{ "width": 60, "height": 60, "borderRadius": 30, "marginRight": 20}} src={e.thumbnail}/>
                           {e.channelname}
                           </Flex>
                )
            })  
          }
           
          </div>

              : null
           
          }

          
    </Box>
  )
}

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
export default SearchModal