import { Flex, VStack, HStack, Image, Text, Button, IconButton, Icon } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMatchsFromGroups, updateProde } from '../../Redux/actions';
import { useAuth0 } from '@auth0/auth0-react';

const PrincipalMatch = ({ match }) => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries);
  const allGroupsMatchs = useSelector((state) => state.allGroupsMatchs);
  const userProde = useSelector((state) => state.userProde);
  const matchFocus = allGroupsMatchs.find((m) => {
    return match === m.id;
  });
  const { user, isAuthenticated } = useAuth0();

  const countryOne = allCountries.find((c) => {
    return c.id === matchFocus.countries[0];
  });
  const countryTwo = allCountries.find((c) => {
    return c.id === matchFocus.countries[1];
  });
  const [result, setResult] = useState({
    local: 0,
    away: 0,
  });

  useEffect(() => {
    if (userProde.hasOwnProperty(match)) {
      console.log('entre')
      let newResult = {
        ...result,
        local: userProde[match].local,
        away: userProde[match].away,
      };
      setResult(newResult);
    } else {
      setResult({
        local: 0,
        away: 0,
      })
    }
  }, [userProde, match]);

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

  const saveScore = () => {
    dispatch(updateProde(user.email, matchFocus.id, result));
  };

  return (
    <Flex
      m="0.1%"
      justifyContent={'space-between'}
      alignItems="center"
      borderRadius="25px"
      w="98%"
      bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
    >
      {matchFocus ? (
        <>
          <Image
            m="20px"
            borderRadius={'5px'}
            w={'240px'}
            h="150px"
            src={countryOne.flag}
          ></Image>
          <Text m="10px" color={'white'} fontSize={30}>
            {countryOne.name}
          </Text>
          <Flex direction={'column'} ml="10px">
            <Button mb={2}  onClick={upButtonLocal}  backgroundColor="transparent">
              <Icon
                color={"white"}
                boxSize="30px"
                as={TriangleUpIcon}
              ></Icon>
            </Button>
            <Button onClick={downButtonLocal}  backgroundColor="transparent">
              <Icon
                color={"white"}
                boxSize="30px"
                as={TriangleDownIcon}
              ></Icon>
            </Button>
          </Flex>
          <Flex
            justifyContent={'center'}
            alignItems="center"
            direction={'column'}
          >
            <Text fontSize={'70px'} color="white">
              {result.local} - {result.away}
            </Text>
            {isAuthenticated ? (
              <Button
                m="0"
                h="34px"
                w="100px"
                bgColor="green.700"
                onClick={saveScore}
              >
                Save
              </Button>
            ) : null}
          </Flex>

          <Flex direction={'column'} mr="10px">
          <Button mb={2} onClick={upButtonAway}  backgroundColor="transparent">
              <Icon
                color={"white"}
                boxSize="30px"
                as={TriangleUpIcon}
              ></Icon>
            </Button>
            <Button onClick={downButtonAway}  backgroundColor="transparent">
              <Icon
                color={"white"}
                boxSize="30px"
                as={TriangleDownIcon}
              ></Icon>
            </Button>
          </Flex>
          <Text m="10px" color={'white'} fontSize={30}>
            {countryTwo.name}
          </Text>
          <Image
            m="20px"
            borderRadius={'5px'}
            w={'240px'}
            h="150px"
            src={countryTwo.flag}
          ></Image>
        </>
      ) : (
        <Text> loading... </Text>
      )}
    </Flex>
  );
};

export default PrincipalMatch;
