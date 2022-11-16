import React from "react";
import "./Home.css"
import Sidebar from "../SideBar/Sidebar"
import { HStack } from '@chakra-ui/react'

  const Home = () => {
    return(
         <>
        <HStack spacing='24px'>
            <Sidebar/>
        </HStack>
        </>  
    )}


export default Home;