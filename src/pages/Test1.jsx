import React, { useState } from "react";
import { Box, Heading, Text, Button, Radio, RadioGroup, VStack, useToast, Progress } from "@chakra-ui/react";

const Test1 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const toast = useToast();

  const questions = [
    {
      question: "Qual é a palavra-chave usada para declarar uma variável em ABAP?",
      options: ["DATA", "VAR", "DIM", "LET"],
      correct: "DATA"
    },
    {
      question: "Qual comando é usado para exibir dados na tela em ABAP?",
      options: ["DISPLAY", "PRINT", "WRITE", "SHOW"],
      correct: "WRITE"
    },
    {
      question: "Como se inicia um loop em ABAP?",
      options: ["WHILE", "DO", "LOOP", "FOR"],
      correct: "DO"
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
        title: "Selecione uma resposta",
        status: "warning",
        duration: 2000,
        isClosable: true
      });
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let correct = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        correct++;
      }
    });
    setShowResults(true);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const score = questions.reduce((acc, _, index) => 
      answers[index] === questions[index].correct ? acc + 1 : acc, 0);
    const percentage = (score / questions.length) * 100;

    return (
      <Box p={8} bg="white" rounded="lg" shadow="lg">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Resultados do Teste 1
        </Heading>
        <VStack spacing={6} align="stretch">
          <Text fontSize="xl" textAlign="center">
            Você acertou {score} de {questions.length} questões ({percentage}%)
          </Text>
          <Progress value={percentage} colorScheme={percentage >= 70 ? "green" : "red"} size="lg" />
          <Button colorScheme="blue" onClick={() => window.location.reload()}>
            Tentar Novamente
          </Button>
        </VStack>
      </Box>
    );
  }

  return (
    <Box p={8} bg="white" rounded="lg" shadow="lg">
      <Heading as="h2" size="xl" mb={4} textAlign="center">
        Teste 1: Conceitos Básicos de ABAP
      </Heading>
      <Progress value={progress} colorScheme="blue" size="sm" mb={6} />
      <VStack spacing={6} align="stretch">
        <Text fontSize="xl">
          Questão {currentQuestion + 1} de {questions.length}
        </Text>
        <Text fontSize="lg">{questions[currentQuestion].question}</Text>
        <RadioGroup onChange={handleAnswer} value={answers[currentQuestion]}>
          <VStack align="stretch" spacing={4}>
            {questions[currentQuestion].options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </VStack>
        </RadioGroup>
        <Button colorScheme="blue" onClick={handleNext}>
          {currentQuestion < questions.length - 1 ? "Próxima" : "Finalizar"}
        </Button>
      </VStack>
    </Box>
  );
};

export default Test1;