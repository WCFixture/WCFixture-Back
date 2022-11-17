import { Flex, Image, Text, Center, Box } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MatchCard = ({ countries }) => {
  const allCountries = useSelector((state) => state.allCountries);
  const navigate = useNavigate()
  const countryOne = allCountries.find((c) => {
    return c.id === countries[0];
  });
  const countryTwo = allCountries.find((c) => {
    return c.id === countries[1];
  });
  return (
    <>
      {countryTwo ? (
        <Center h="30px" w="46%" padding={7} ml={"2%"} mr={"2%"} my="10px" justifyContent={'space-evenly'} onClick={()=>navigate('/home')} _hover={{backgroundColor: "rgba(25,10,83,1)", cursor: "pointer", boxShadow: "1px 1px 5px 1px rgba(0,0,0,0.35)"}} borderRadius="15px">
          <Image src={countryOne.flag} h="30px" w="50px" borderRadius={2} />
          <Text>{countryOne.name}</Text>
          <Text>&nbsp;-&nbsp;</Text>
          <Text>{countryTwo.name}</Text>
          <Image src={countryTwo.flag} h="30px" w="50px" borderRadius={2} />
        </Center>
      ) : (
        <></>
      )}
    </>
  );
};

export default MatchCard;
