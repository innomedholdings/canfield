import {
  Box,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React from "react";
import { FiMail, FiMenu } from "react-icons/fi";

export default function Layout({ children }: any) {
  const data = useStaticQuery<Queries.MenuDataQuery>(graphql`
    query MenuData {
      allMdx {
        nodes {
          frontmatter {
            name
          }
          id
        }
      }
    }
  `);
  return (
    <Box>
      <HStack bgColor={"gray.800"} justifyContent={"space-between"}>
        <Box p={4} color={"red.400"}>
          <Link to="/">
            <Image src="https://www.canfieldsci.com/common/images/graphics/logo-canfield-site.png" />
          </Link>
        </Box>
        <Menu>
          <MenuButton px={10} fontSize={"4xl"}>
            <FiMenu color="white" />
          </MenuButton>
          <MenuList>
            {data?.allMdx.nodes.map((product) => (
              <MenuItem
                key={product?.id}
                onClick={() => navigate(`/products/${product?.id}`)}
              >
                {product.frontmatter?.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
      <Box>{children}</Box>
      <VStack
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
