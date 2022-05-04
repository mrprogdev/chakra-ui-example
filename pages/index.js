import { Flex, Heading, Stack, Text } from "@chakra-ui/react";

import DarkModeSwitch from "../components/DarkModeSwitch";

export default function Home() {
  return (
    <Stack as="main" align="center">
      <Flex flexDirection="column" width="700px">
        <Flex direction="row" w="700px" pt={4} justify="space-between">
          <DarkModeSwitch />
        </Flex>
        <Heading as="h1" size="2xl">
          Hello, WOrld!
        </Heading>
        <Text mt={4}>Hello again</Text>
      </Flex>
    </Stack>
  );
}
