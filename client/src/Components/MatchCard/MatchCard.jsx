import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "./Home.css"


const MatchCard = ({ countries, date, instance, status }) => {
  const allCountries = useSelector((state) => state.allCountries)
    return(
      <Flex>
        
      </Flex> 
    )}


export default MatchCard;