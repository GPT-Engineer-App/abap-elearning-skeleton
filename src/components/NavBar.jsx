import { Box, Flex, Link, Icon, Text } from "@chakra-ui/react";
import { FaChartLine, FaCogs, FaBookOpen, FaComments, FaUser, FaBookReader } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => (
  <Box bg="blue.600" p={4} shadow="md" position="fixed" top="0" width="100%" zIndex="50">
    <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
      <Text color="white" fontSize="2xl" fontWeight="bold" display="flex" alignItems="center">
        <Icon as={FaBookReader} mr={2} /> ABAP eLearning
      </Text>
      <Flex>
        <Link as={RouterLink} to="/dashboard" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaChartLine} mr={1} /> Dashboard
        </Link>
        <Link as={RouterLink} to="/features" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaCogs} mr={1} /> Features
        </Link>
        <Link as={RouterLink} to="/lessons" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaBookOpen} mr={1} /> Lessons
        </Link>
        <Link as={RouterLink} to="/chatbot" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaComments} mr={1} /> Chatbot
        </Link>
        <Link as={RouterLink} to="/profile" color="white" mx={2} display="flex" alignItems="center">
          <Icon as={FaUser} mr={1} /> Profile
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default NavBar;
