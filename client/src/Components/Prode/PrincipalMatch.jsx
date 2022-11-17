import { Flex, VStack, HStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const PrincipalMatch = ({ countries, date, instance, status }) => {
  const allCountries = useSelector((state) => state.allCountries);
  const [result, setResult] = useState({
    local: 0,
    away: 0,
  });
  function upButtonLocal() {
    if (result.local < 9) {
      setResult({
        ...result,
        local: result.local + 1,
      });
    }
  }
  function upButtonAway() {
    if (result.away < 9) {
      setResult({
        ...result,
        away: result.away + 1,
      });
    }
  }

  function downButtonAway() {
    if (result.away > 0) {
      setResult({
        ...result,
        away: result.away - 1,
      });
    }
  }

  function downButtonLocal() {
    if (result.local > 0) {
      setResult({
        ...result,
        local: result.local - 1,
      });
    }
  }

  console.log(allCountries);
  return (
    <Flex
      m="0.1%"
      justifyContent={"space-between"}
      alignItems="center"
      w="90%"
      bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
    >
      <Image m="20px" borderRadius={"5px"} w={"240px"} h="150px" src={allCountries[0].flag}></Image>
      <Text m="10px" color={"white"} fontSize={30}>
        {allCountries[0].name}
      </Text>
      <Flex direction={"column"} ml="10px">
        <Button mb="10px" onClick={upButtonLocal}>
          <Image
            w="10px"
            src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
          ></Image>
        </Button>
        <Button onClick={downButtonLocal}>
          <Image
            w="10px"
            src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
          ></Image>
        </Button>
      </Flex>
      <Text fontSize={"70px"} ml="20px" color="white">
        {result.local}
      </Text>
      <Text fontSize={"70px"} color="white">
        -
      </Text>
      <Text fontSize={"70px"} mr="20px" color="white">
        {result.away}
      </Text>

      <Flex direction={"column"} mr="10px">
        <Button mb="10px" onClick={upButtonAway}>
          <Image
            w="10px"
            src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
          ></Image>
        </Button>
        <Button onClick={downButtonAway}>
          <Image
            w="10px"
            src="https://cdn-icons-png.flaticon.com/512/57/57055.png"
          ></Image>
        </Button>
      </Flex>
      <Text m="10px" color={"white"} fontSize={30}>
        {allCountries[1].name}
      </Text>
      <Image m="20px" borderRadius={"5px"} w={"240px"} h="150px" src={allCountries[1].flag}></Image>
    </Flex>
  );
};

export default PrincipalMatch;
