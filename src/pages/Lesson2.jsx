import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const Lesson2 = () => (
  <Box p={8} bg="white" rounded="lg" shadow="lg">
    <Heading as="h2" size="xl" mb={4} textAlign="center">
      Lesson 2: Data Dictionary
    </Heading>
    <Text mb={4}>Lesson 2 content goes here.</Text>
    <Button colorScheme="blue" onClick={() => window.history.back()}>
      Back to Lessons
    </Button>
  </Box>
);

export default Lesson2;
