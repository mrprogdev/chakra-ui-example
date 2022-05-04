import {
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Home() {
  const color = useColorModeValue("red.900", "white");
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" width="700px">
        <Flex direction="row" w="700px" pt={4} justify="space-between">
          <DarkModeSwitch />
        </Flex>
        <Heading as="h1" color={color} fontWeight="bold" size="2xl">
          Hello, WOrld!
        </Heading>
        <Text mt={4}>Hello again</Text>
      </Flex>
    </Stack>
  );
}
