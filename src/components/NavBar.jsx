import { Box, Flex, Link, Icon } from "@chakra-ui/react";
import { FaChartLine, FaCogs, FaBookOpen, FaComments, FaUser } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
      <Link as={RouterLink} to="/dashboard" color="white" display="flex" alignItems="center">
        <Icon as={FaChartLine} mr={2} boxSize={6} /> Dashboard
      </Link>
      <Link as={RouterLink} to="/features" color="white" display="flex" alignItems="center">
        <Icon as={FaCogs} mr={2} boxSize={6} /> Features
      </Link>
      <Link as={RouterLink} to="/lessons" color="white" display="flex" alignItems="center">
        <Icon as={FaBookOpen} mr={2} boxSize={6} /> Lessons
      </Link>
      <Link as={RouterLink} to="/chatbot" color="white" display="flex" alignItems="center">
        <Icon as={FaComments} mr={2} boxSize={6} /> Chatbot
      </Link>
      <Link as={RouterLink} to="/profile" color="white" display="flex" alignItems="center">
        <Icon as={FaUser} mr={2} boxSize={6} /> Profile
      </Link>
    </Flex>
  </Box>
);

export default NavBar;
