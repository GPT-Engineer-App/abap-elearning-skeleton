import React from "react";
import { Box, Button, Input, FormControl, FormLabel, Heading } from "@chakra-ui/react";

const Login = () => (
  <Box maxW="md" mx="auto" mt="10" p="6" bg="white" borderRadius="lg" boxShadow="lg">
    <Heading as="h2" size="xl" textAlign="center" mb="6">
      Login to ABAP eLearning
    </Heading>
    <form>
      <FormControl id="email" mb="4">
        <FormLabel>Email</FormLabel>
        <Input type="email" required />
      </FormControl>
      <FormControl id="password" mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" required />
      </FormControl>
      <Button type="submit" colorScheme="blue" width="full">
        Login
      </Button>
    </form>
  </Box>
);

export default Login;
