import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Text, Button, Image } from '@chakra-ui/react';

export default function LoginButton({ type }) {
  const { loginWithRedirect } = useAuth0();

  return type === 'Login' ? (
    <Button
      mb="2vh"
      w="75%"
      colorScheme="blue"
      onClick={() => loginWithRedirect()}
    >
      {type}
    </Button>
  ) : (
    <Button
      mb="2vh"
      w="75%"
      colorScheme="blue"
      onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
    >
      {type}
    </Button>
  );
}
