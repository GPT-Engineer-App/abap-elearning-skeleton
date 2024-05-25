import { Box, Flex, Link, Icon, Text } from "@chakra-ui/react";
import { FaChartLine, FaBookOpen, FaComments, FaUser, FaBookReader, FaPencilAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => (
  <Box bg="blue.600" p={4} shadow="md" position="fixed" top="0" width="100%" zIndex="50" height="60px">
    <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
      <Text color="white" fontSize="2xl" fontWeight="bold" display="flex" alignItems="center">
        <Icon as={FaBookReader} mr={2} /> ABAP eLearning
      </Text>
      <Flex>
        <Link as={RouterLink} to="/dashboard" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaChartLine} mr={1} /> Dashboard
        </Link>
        <Link as={RouterLink} to="/lessons" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaBookOpen} mr={1} /> Lessons
        </Link>
        <Link as={RouterLink} to="/tests" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaPencilAlt} mr={1} /> Tests
        </Link>
        <Link as={RouterLink} to="/chatbot" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaComments} mr={1} /> Chatbot
        </Link>
        <Link as={RouterLink} to="/profile" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaUser} mr={1} /> Profile
        </Link>
        <Link as={RouterLink} to="/lesson1" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaBookOpen} mr={1} /> Lesson 1
        </Link>
        <Link as={RouterLink} to="/lesson2" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaBookOpen} mr={1} /> Lesson 2
        </Link>
        <Link as={RouterLink} to="/lesson3" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaBookOpen} mr={1} /> Lesson 3
        </Link>
        <Link as={RouterLink} to="/test1" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaPencilAlt} mr={1} /> Test 1
        </Link>
        <Link as={RouterLink} to="/test2" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaPencilAlt} mr={1} /> Test 2
        </Link>
        <Link as={RouterLink} to="/test3" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaPencilAlt} mr={1} /> Test 3
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default NavBar;
