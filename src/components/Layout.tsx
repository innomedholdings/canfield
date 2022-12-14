import { Box, HStack, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { FiMail } from "react-icons/fi";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <Box>
      <Header />
      <Box>{children}</Box>
      <VStack
        mt={3}
        p={3}
        minH={20}
        bgColor={"gray.900"}
        bgGradient="linear(to-t, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.5))"
        justifyContent="center"
        color={"gray.300"}
      >
        <Text>(주)이노메드홀딩스</Text>
        <Text>
          (04322) 서울특별시 용산구 한강대로 257, 2층(갈월동, 청룡빌딩)
        </Text>
        <Box mt={3}>
          <Text>제품문의 : 02-715-7166 </Text>
          <HStack>
            <FiMail /> <Text>david@innomed.co.kr</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}
