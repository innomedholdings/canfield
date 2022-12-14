import {
  Box,
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";

export default function Header() {
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
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  return (
    <HStack bgColor={"gray.800"} justifyContent={"space-between"}>
      <Box p={3}>
        <Link to="/">
          <Image
            width={"44"}
            src="https://www.canfieldsci.com/common/images/graphics/logo-canfield-site.png"
          />
        </Link>
      </Box>
      {!isMobile ? (
        <HStack spacing={"20"} px={10}>
          {data?.allMdx?.nodes.map((product) => (
            <Link to={`/products/${product?.id}`}>
              <Button colorScheme="telegram" variant="ghost">
                {product?.frontmatter?.name}
              </Button>
            </Link>
          ))}
        </HStack>
      ) : (
        <Menu>
          <MenuButton
            px={10}
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
          >
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
      )}
    </HStack>
  );
}
