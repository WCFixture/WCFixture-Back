import React from "react";
import Sidebar from "../SideBar/Sidebar"
import { HStack} from '@chakra-ui/react'
import "./Home.css"
import HomeContent from "./Homecontent";

  const Home = () => {
    return(
      <>
        <HStack spacing='24px'>
            <Sidebar/>
            <HomeContent/>
        </HStack>
      </> 
    )}


export default Home;