import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  createIcon,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GroupMatchs from './GroupMatchs';
import AllGroups from './AllGroups';
import PrincipalMatch from './PrincipalMatch';

export default function PickEm() {
  const navigate = useNavigate();
  return (
    <Center minH="100vh" w="100%" flexDirection="column" justifyContent="flex-start">
      <Heading color="white" mt="10vh">Bienvenido a nuestro prode!</Heading>
      <br />
      <Text color={'gray.500'} w="50%">
        Con el fixture vas a tener acceso a toda la info de los partidos, en un
        solo lugar vas a tener acceso a las fechas, horarios y resultados.
        Además podes completar el prode, en el cual jugas a acertar los
        resultados y participas por premios en dinero real.
      </Text>
      <PrincipalMatch/>
      <Center w="90%">
        <AllGroups/>
        <GroupMatchs group={"C"}/>
      </Center>
    </Center>
  );
}
