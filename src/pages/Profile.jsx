import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => (
  <Box maxW="md" mx="auto" mt="10" p="6" bg="white" borderRadius="lg" boxShadow="lg" textAlign="center">
    <FaUserCircle size="6rem" color="gray" />
    <Heading as="h3" size="lg" mt="4">
      John Doe
    </Heading>
    <Text color="gray.600" mb="4">
      john.doe@example.com
    </Text>
    <Button colorScheme="blue">Edit Profile</Button>
  </Box>
);

export default Profile;
