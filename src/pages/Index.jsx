import { useState, useEffect } from "react";
import { Container, Box, VStack, HStack, Text, Button, IconButton, Input, useToast, Heading } from "@chakra-ui/react";
import { FaBook, FaPen, FaRobot, FaChartLine, FaCogs, FaUser } from "react-icons/fa";

const lessons = [
  { id: 1, title: "Introduction to SAP ABAP", content: "SAP ABAP is a programming language for developing applications for the SAP R/3 system." },
  { id: 2, title: "Data Dictionary", content: "The ABAP Data Dictionary is a central repository for data definitions and descriptions." },
  { id: 3, title: "Reports", content: "ABAP reports are used to retrieve and display data from the SAP database." },
];

const tests = [
  { id: 1, title: "Test 1", questions: ["What is SAP ABAP?", "Explain the ABAP Data Dictionary."] },
  { id: 2, title: "Test 2", questions: ["What are ABAP reports?", "How do you create a report in ABAP?"] },
];

const Index = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(page || "home");
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const toast = useToast();

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentPage("lesson");
  };

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setCurrentPage("test");
  };

  const handleChatSubmit = () => {
    if (chatInput.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter a message.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setChatMessages([...chatMessages, { sender: "user", message: chatInput }]);
    setChatInput("");
    // Simulate chatbot response
    setTimeout(() => {
      setChatMessages((prevMessages) => [...prevMessages, { sender: "bot", message: "This is a simulated response." }]);
    }, 1000);
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4}>
        {currentPage === "dashboard" && (
          <Box>
            <Heading as="h2" size="lg">
              Dashboard
            </Heading>
            <Box>
              <Text>Lessons Completed: 5</Text>
              <Text>Quizzes Taken: 3</Text>
              <Text>Total Score: 85%</Text>
              <Text>Progress: 50%</Text>
            </Box>
          </Box>
        )}

        {currentPage === "features" && (
          <Box>
            <Heading as="h2" size="lg">
              Key Features
            </Heading>
            <Box>
              <Text>Interactive Lessons</Text>
              <Text>Dynamic Tests</Text>
              <Text>Chatbot Assistance</Text>
              <Text>Progress Tracking</Text>
            </Box>
          </Box>
        )}

        {currentPage === "profile" && (
          <Box>
            <Heading as="h2" size="lg">
              Profile
            </Heading>
            <Box>
              <Text>John Doe</Text>
              <Text>john.doe@example.com</Text>
            </Box>
          </Box>
        )}

        {currentPage === "lessons" && (
          <Box>
            <Heading as="h2" size="lg">
              Lessons
            </Heading>
            {lessons.map((lesson) => (
              <Button key={lesson.id} onClick={() => handleLessonClick(lesson)}>
                {lesson.title}
              </Button>
            ))}
          </Box>
        )}

        {currentPage === "lesson" && selectedLesson && (
          <Box>
            <Button onClick={() => setCurrentPage("lessons")}>Back to Lessons</Button>
            <Heading as="h2" size="lg">
              {selectedLesson.title}
            </Heading>
            <Text>{selectedLesson.content}</Text>
          </Box>
        )}

        {currentPage === "tests" && (
          <Box>
            <Heading as="h2" size="lg">
              Tests
            </Heading>
            {tests.map((test) => (
              <Button key={test.id} onClick={() => handleTestClick(test)}>
                {test.title}
              </Button>
            ))}
          </Box>
        )}

        {currentPage === "test" && selectedTest && (
          <Box>
            <Button onClick={() => setCurrentPage("tests")}>Back to Tests</Button>
            <Heading as="h2" size="lg">
              {selectedTest.title}
            </Heading>
            {selectedTest.questions.map((question, index) => (
              <Text key={index}>{question}</Text>
            ))}
          </Box>
        )}

        {currentPage === "chatbot" && (
          <Box width="100%">
            <Heading as="h2" size="lg">
              Chatbot
            </Heading>
            <VStack spacing={2} align="stretch">
              <Box height="300px" overflowY="auto" border="1px solid" borderColor="gray.200" p={2}>
                {chatMessages.map((msg, index) => (
                  <Text key={index} align={msg.sender === "user" ? "right" : "left"}>
                    {msg.message}
                  </Text>
                ))}
              </Box>
              <HStack>
                <Input value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type your message..." />
                <Button onClick={handleChatSubmit}>Send</Button>
              </HStack>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
