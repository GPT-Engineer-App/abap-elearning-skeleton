import { Box, VStack, Input, Button, Text, Container, Flex, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = ({ page }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (!inputMessage.trim()) {
      toast({
        title: "Mensagem vazia",
        description: "Por favor, digite uma mensagem",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    // Simulate bot response
    const botResponse = {
      text: "Obrigado por sua mensagem! Em breve implementaremos a integração com IA.",
      sender: "bot",
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage, botResponse]);
    setInputMessage("");
  };

  const renderContent = () => {
    switch (page) {
      case "dashboard":
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
            {/* Conteúdo do Dashboard */}
          </div>
        );
      case "lessons":
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Lições</h1>
            {/* Conteúdo das Lições */}
          </div>
        );
      case "tests":
        return (
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Testes</h1>
            {/* Conteúdo dos Testes */}
          </div>
        );
      case "chatbot":
        return (
          <Container maxW="container.md" py={8}>
            <VStack spacing={4} align="stretch" h="calc(100vh - 200px)">
              <Box flex="1" overflowY="auto" bg="gray.50" p={4} borderRadius="md" mb={4}>
                {messages.map((message, index) => (
                  <Flex
                    key={index}
                    justify={message.sender === "user" ? "flex-end" : "flex-start"}
                    mb={4}
                  >
                    <Box
                      bg={message.sender === "user" ? "blue.500" : "gray.200"}
                      color={message.sender === "user" ? "white" : "black"}
                      px={4}
                      py={2}
                      borderRadius="lg"
                      maxW="80%"
                    >
                      <Text>{message.text}</Text>
                    </Box>
                  </Flex>
                ))}
              </Box>
              <Flex>
                <Input
                  placeholder="Digite sua mensagem..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                  mr={2}
                />
                <Button colorScheme="blue" onClick={handleSendMessage}>
                  Enviar
                </Button>
              </Flex>
            </VStack>
          </Container>
        );
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Seção de Boas-vindas */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                      Bem-vindo ao ABAP eLearning
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8">
                      Aprenda ABAP de forma interativa e prática com nosso sistema de aprendizado personalizado.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Começar Agora
                      </button>
                      <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors duration-300">
                        Saiba Mais
                      </button>
                    </div>
                  </div>

                  {/* Seção de Recursos */}
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 md:p-12 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Recursos Principais</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2">Aprendizado Interativo</h3>
                          <p className="text-white/80">Exercícios práticos e feedback em tempo real para maximizar seu aprendizado.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2">Personalização</h3>
                          <p className="text-white/80">Conteúdo adaptado ao seu ritmo e nível de conhecimento.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl mb-2">Certificação</h3>
                          <p className="text-white/80">Obtenha certificados reconhecidos ao completar os módulos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return <Box>{renderContent()}</Box>;
};

export default Index;