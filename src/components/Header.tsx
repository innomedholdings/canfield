import {
  Box,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";
import React from "react";
import { FiMenu } from "react-icons/fi";

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
  return (
    <HStack bgColor={"gray.800"} justifyContent={"space-between"}>
      <Box p={3} color={"red.400"}>
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
  );
}
