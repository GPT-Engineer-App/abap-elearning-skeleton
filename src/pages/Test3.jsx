import React, { useState } from "react";
import { Box, Heading, Text, Button, Radio, RadioGroup, VStack, useToast, Progress } from "@chakra-ui/react";

const Test3 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const toast = useToast();

  const questions = [
    {
      question: "O que é um ALV Grid em ABAP?",
      options: [
        "Um tipo de banco de dados",
        "Uma ferramenta para exibir dados em formato de tabela",
        "Um método de programação",
        "Um tipo de variável"
      ],
      correct: "Uma ferramenta para exibir dados em formato de tabela"
    },
    {
      question: "Qual é a função do comando APPEND em ABAP?",
      options: [
        "Adicionar uma linha a uma tabela interna",
        "Remover uma linha de uma tabela",
        "Modificar uma linha existente",
        "Ordenar uma tabela"
      ],
      correct: "Adicionar uma linha a uma tabela interna"
    },
    {
      question: "O que é uma classe em ABAP Objects?",
      options: [
        "Um tipo de tabela",
        "Um template para criar objetos",
        "Um método especial",
        "Uma variável global"
      ],
      correct: "Um template para criar objetos"
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
          Resultados do Teste 3
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
        Teste 3: ABAP Avançado
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

export default Test3;