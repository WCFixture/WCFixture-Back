import { Flex, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchsFromGroup } from "../../Redux/actions";
import MatchCard from "./MatchCard";


const GroupMatchs = ({ group }) => {
  const matchs = useSelector((state) => state.matchsFromGroup)
  const primerosMatchs = matchs.slice(0, 3)
  const segundosMatchs = matchs.slice(3)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMatchsFromGroup(group))
  }, [])
    return(
    <Flex w={"55%"} flexDirection="column" color={"whiteAlpha.600"} borderRadius="30px" bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)">
        <Heading ml={5} paddingY={"10px"}>
            Group {group}
        </Heading>
        <Divider borderColor={"blackAlpha.800"}/>
        <Flex wrap="wrap" justifyItems="center">
            {matchs?.map((m)=>{
                return (
                    <MatchCard countries={m.countries}/>
                )
            })}
        </Flex>
    </Flex> 
)}


export default GroupMatchs;