import React, { useState } from "react";
import { Box, Heading, Text, Button, Radio, RadioGroup, VStack, useToast, Progress, Container } from "@chakra-ui/react";

const Test2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const toast = useToast();

  const questions = [
    {
      question: "Qual é o propósito principal do Dicionário de Dados ABAP?",
      options: [
        "Armazenar variáveis globais",
        "Definir estruturas e tabelas do banco de dados",
        "Gerenciar memória do sistema",
        "Controlar o fluxo do programa"
      ],
      correct: "Definir estruturas e tabelas do banco de dados",
      explanation: "O Dicionário de Dados ABAP (DDIC) é usado para definir e gerenciar estruturas de dados, tabelas e outros objetos do banco de dados."
    },
    {
      question: "O que é uma estrutura em ABAP?",
      options: [
        "Um tipo de loop",
        "Um grupo de campos relacionados",
        "Uma tabela interna",
        "Um método de classe"
      ],
      correct: "Um grupo de campos relacionados",
      explanation: "Uma estrutura em ABAP é um tipo de dado que agrupa campos relacionados em uma única unidade."
    },
    {
      question: "Como se chama uma tabela transparente em ABAP?",
      options: [
        "Uma tabela que não pode ser vista",
        "Uma tabela que existe apenas na memória",
        "Uma tabela que existe no banco de dados",
        "Uma tabela temporária"
      ],
      correct: "Uma tabela que existe no banco de dados",
      explanation: "Uma tabela transparente é uma tabela física que existe no banco de dados e pode ser acessada diretamente."
    }
  ];

  const handleAnswer = (value) => {
    setAnswers({
      ...answers,
      [currentQuestion]: value
    });
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      toast({
        title: "Atenção",
        description: "Por favor, selecione uma resposta antes de continuar",
        status: "warning",
        duration: 3000,
        isClosable: true
      });
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const score = questions.reduce((acc, _, index) => 
      answers[index] === questions[index].correct ? acc + 1 : acc, 0);
    const percentage = (score / questions.length) * 100;

    return (
      <Container maxW="container.md" py={8}>
        <Box p={8} bg="white" rounded="xl" shadow="lg">
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Resultados do Teste 2
          </Heading>
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" textAlign="center">
              Você acertou {score} de {questions.length} questões ({percentage.toFixed(1)}%)
            </Text>
            <Progress 
              value={percentage} 
              colorScheme={percentage >= 70 ? "green" : "red"} 
              size="lg" 
              borderRadius="md"
            />
            {questions.map((q, index) => (
              <Box key={index} p={4} bg={answers[index] === q.correct ? "green.50" : "red.50"} rounded="md">
                <Text fontWeight="bold">{q.question}</Text>
                <Text color={answers[index] === q.correct ? "green.600" : "red.600"}>
                  Sua resposta: {answers[index]}
                </Text>
                <Text color="green.600">Resposta correta: {q.correct}</Text>
                <Text mt={2} fontSize="sm" color="gray.600">{q.explanation}</Text>
              </Box>
            ))}
            <Button colorScheme="blue" size="lg" onClick={handleRetry}>
              Tentar Novamente
            </Button>
          </VStack>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={8}>
      <Box p={8} bg="white" rounded="xl" shadow="lg">
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Teste 2: Dicionário de Dados ABAP
        </Heading>
        <Progress value={progress} colorScheme="blue" size="sm" mb={6} borderRadius="md" />
        <VStack spacing={6} align="stretch">
          <Text fontSize="xl">
            Questão {currentQuestion + 1} de {questions.length}
          </Text>
          <Text fontSize="lg" fontWeight="medium">{questions[currentQuestion].question}</Text>
          <RadioGroup onChange={handleAnswer} value={answers[currentQuestion]}>
            <VStack align="stretch" spacing={4}>
              {questions[currentQuestion].options.map((option) => (
                <Radio 
                  key={option} 
                  value={option}
                  size="lg"
                  colorScheme="blue"
                >
                  {option}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button 
              onClick={handlePrevious} 
              isDisabled={currentQuestion === 0}
              colorScheme="gray"
            >
              Anterior
            </Button>
            <Button 
              onClick={handleNext} 
              colorScheme="blue"
            >
              {currentQuestion < questions.length - 1 ? "Próxima" : "Finalizar"}
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default Test2;