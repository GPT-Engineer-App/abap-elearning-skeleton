import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Test1 = () => (
  <Box p={8} bg="white" rounded="lg" shadow="lg">
    <Heading as="h2" size="xl" mb={4} textAlign="center">
      Test 1: Basic ABAP Quiz
    </Heading>
    <Text mb={4}>Test 1 content goes here.</Text>
    <Button colorScheme="blue" onClick={() => window.history.back()}>
      Back to Tests
    </Button>
  </Box>
);

export default Test1;
