import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
      <Link as={RouterLink} to="/" color="white">
        Home
      </Link>
      <Link as={RouterLink} to="/lessons" color="white">
        Lessons
      </Link>
      <Link as={RouterLink} to="/tests" color="white">
        Tests
      </Link>
      <Link as={RouterLink} to="/chatbot" color="white">
        Chatbot
      </Link>
    </Flex>
  </Box>
);

export default NavBar;
