import React, { useState } from "react";
import { Box, Heading, Text, Button, Radio, RadioGroup, VStack, useToast, Progress } from "@chakra-ui/react";

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
      correct: "Definir estruturas e tabelas do banco de dados"
    },
    {
      question: "O que é uma estrutura em ABAP?",
      options: [
        "Um tipo de loop",
        "Um grupo de campos relacionados",
        "Uma tabela interna",
        "Um método de classe"
      ],
      correct: "Um grupo de campos relacionados"
    },
    {
      question: "Como se chama uma tabela transparente em ABAP?",
      options: [
        "Uma tabela que não pode ser vista",
        "Uma tabela que existe apenas na memória",
        "Uma tabela que existe no banco de dados",
        "Uma tabela temporária"
      ],
      correct: "Uma tabela que existe no banco de dados"
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
          Resultados do Teste 2
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
        Teste 2: Dicionário de Dados ABAP
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

export default Test2;