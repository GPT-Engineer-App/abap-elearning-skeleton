import { Box, Flex, Link, Icon, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from "@chakra-ui/react";
import { FaChartLine, FaBookOpen, FaComments, FaUser, FaBookReader, FaPencilAlt, FaBars } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
const NavBar = () => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const NavLinks = ({
    isMobile = false
  }) => <>
      <Link as={RouterLink} to="/dashboard" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
      bg: "blue.500",
      textDecoration: "none"
    }} fontWeight="medium">
        <Icon as={FaChartLine} mr={2} /> Dashboard
      </Link>
      <Link as={RouterLink} to="/lessons" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
      bg: "blue.500",
      textDecoration: "none"
    }} fontWeight="medium">
        <Icon as={FaBookOpen} mr={2} /> Lessons
      </Link>
      <Link as={RouterLink} to="/tests" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
      bg: "blue.500",
      textDecoration: "none"
    }} fontWeight="medium">
        <Icon as={FaPencilAlt} mr={2} /> Tests
      </Link>
      <Link as={RouterLink} to="/chatbot" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
      bg: "blue.500",
      textDecoration: "none"
    }} fontWeight="medium">
        <Icon as={FaComments} mr={2} /> Chatbot
      </Link>
      <Link as={RouterLink} to="/profile" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
      bg: "blue.500",
      textDecoration: "none"
    }} fontWeight="medium">
        <Icon as={FaUser} mr={2} /> Profile
      </Link>
      {!isMobile && <>
          <Link as={RouterLink} to="/lesson1" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaBookOpen} mr={2} /> Lesson 1
          </Link>
          <Link as={RouterLink} to="/lesson2" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaBookOpen} mr={2} /> Lesson 2
          </Link>
          <Link as={RouterLink} to="/lesson3" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaBookOpen} mr={2} /> Lesson 3
          </Link>
          <Link as={RouterLink} to="/test1" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaPencilAlt} mr={2} /> Test 1
          </Link>
          <Link as={RouterLink} to="/test2" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaPencilAlt} mr={2} /> Test 2
          </Link>
          <Link as={RouterLink} to="/test3" color="white" mx={2} display="flex" alignItems="center" p={2} borderRadius="md" _hover={{
        bg: "blue.500",
        textDecoration: "none"
      }} fontWeight="medium">
            <Icon as={FaPencilAlt} mr={2} /> Test 3
          </Link>
        </>}
    </>;
  return <Box bg="blue.600" p={4} shadow="lg" position="fixed" top="0" width="100%" zIndex="50" height="60px">
      <Flex justify="space-between" align="center" maxW="container.xl" mx="auto">
        <Text color="white" fontSize="2xl" fontWeight="bold" display="flex" alignItems="center">
          <Icon as={FaBookReader} mr={2} /> ABAP eLearning
        </Text>
        
        {/* Desktop Navigation */}
        <Flex display={{
        base: "none",
        lg: "flex"
      }} alignItems="center" gap={2}>
          <NavLinks />
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton display={{
        base: "flex",
        lg: "none"
      }} aria-label="Open menu" fontSize="20px" color="white" variant="ghost" icon={<FaBars />} onClick={onOpen} _hover={{
        bg: "blue.500"
      }} />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody bg="white" className="bg-blue-900 hover:bg-blue-800">
              <VStack spacing={2} align="stretch">
                <NavLinks isMobile={true} />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>;
};
export default NavBar;