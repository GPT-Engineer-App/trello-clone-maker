import { Box, Container, VStack, Heading, Text, Flex, useColorModeValue } from "@chakra-ui/react";

const Board = ({ title, children }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box bg={bg} p={4} borderRadius="md" w="300px" minH="400px" boxShadow="md">
      <Heading as="h3" size="md" mb={4}>{title}</Heading>
      {children}
    </Box>
  );
};

const Card = ({ content }) => {
  const bg = useColorModeValue("white", "gray.600");
  return (
    <Box bg={bg} p={4} borderRadius="md" mb={4} boxShadow="sm">
      <Text>{content}</Text>
    </Box>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">Trello Clone</Heading>
        <Flex justify="space-between" w="full">
          <Board title="To Do">
            <Card content="Task 1" />
            <Card content="Task 2" />
          </Board>
          <Board title="In Progress">
            <Card content="Task 3" />
          </Board>
          <Board title="Done">
            <Card content="Task 4" />
          </Board>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;