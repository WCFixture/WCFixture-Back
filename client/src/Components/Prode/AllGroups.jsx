import {
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const AllGroups = ({ groupFocus, setGroup }) => {
  const allCountries = useSelector((state) => state.allCountries);

  return (
    <Flex
      w="39%"
      h={'48vh'}
      color={'whiteAlpha.600'}
      borderRadius="25px"
      bgGradient="radial(rgba(22,8,45,0.8410714627647934) 0%, rgba(25,10,83,0.8410714627647934) 100%)"
      direction={'column'}
      justifyContent={'space-evenly'}
      justify
      overflow="hidden"
    >
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'A' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('A');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group A
        </Text>
        {allCountries?.slice(0, 4).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          w="34px"
          h="34px"
          src="https://cdn-icons-png.flaticon.com/512/1443/1443000.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'B' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('B');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group B
        </Text>
        {allCountries?.slice(4, 8).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'C' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('C');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group C
        </Text>
        {allCountries?.slice(8, 12).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'D' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('D');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group D
        </Text>
        {allCountries?.slice(12, 16).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'E' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('E');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group E
        </Text>
        {allCountries?.slice(16, 20).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'F' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('F');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group F
        </Text>
        {allCountries?.slice(20, 24).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'G' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('G');
        }}
      >
        <Text color={'white'} mt="12px" fontSize="24px">
          Group G
        </Text>
        {allCountries?.slice(24, 28).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
      <Flex
        h="14%"
        py={1}
        justifyContent={'space-evenly'}
        direction={'row'}
        display={groupFocus === 'H' ? 'none' : 'flex'}
        _hover={{
          backgroundColor: '#222D80',
          cursor: 'pointer',
          transitionDuration: '0.5s',
          transitionTimingFunction: "ease-in-out"
        }}
        onClick={() => {
          setGroup('H');
        }}
      >
        <Text color={'white'} mt="0.4%" fontSize="24px">
          Group H
        </Text>
        {allCountries?.slice(28, 32).map((el) => {
          return (
            <Image
              w="45px"
              h="34px"
              m="10px"
              borderRadius={2}
              src={el.flag}
            ></Image>
          );
        })}
        <Image
          mt="10px"
          mx="-5.5px"
          w="45px"
          h="34px"
          src="https://i.ibb.co/cFygpXg/matiii.png"
        ></Image>
      </Flex>
    </Flex>
  );
};

export default AllGroups;
