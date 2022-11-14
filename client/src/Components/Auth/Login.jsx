import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text, Button, Image } from '@chakra-ui/react';

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button colorScheme='blue' onClick={() => loginWithRedirect()}>Login</Button>
  )

}
