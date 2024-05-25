import { Box, Flex, Link, Icon } from "@chakra-ui/react";
import { FaHome, FaBook, FaPen, FaRobot } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
      <Link as={RouterLink} to="/" color="white" display="flex" alignItems="center">
        <Icon as={FaHome} mr={2} /> Home
      </Link>
      <Link as={RouterLink} to="/lessons" color="white" display="flex" alignItems="center">
        <Icon as={FaBook} mr={2} /> Lessons
      </Link>
      <Link as={RouterLink} to="/tests" color="white" display="flex" alignItems="center">
        <Icon as={FaPen} mr={2} /> Tests
      </Link>
      <Link as={RouterLink} to="/chatbot" color="white" display="flex" alignItems="center">
        <Icon as={FaRobot} mr={2} /> Chatbot
      </Link>
    </Flex>
  </Box>
);

export default NavBar;
