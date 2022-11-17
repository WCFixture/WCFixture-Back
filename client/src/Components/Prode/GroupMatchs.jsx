import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "./Home.css"


const GroupMatchs = ({ countries, group, instance, status }) => {
  const allCountries = useSelector((state) => state.allCountries)
    return(
    <Flex>
        <Heading>
            Group {group}
        </Heading>
        <SimpleGrid columns="2" row="3">
            
        </SimpleGrid>
    </Flex> 
)}


export default GroupMatchs;