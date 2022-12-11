import * as React from "react";
import { graphql, HeadFC, Link } from "gatsby";
import { Box, Grid, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IIndexProps {
  data: Queries.ProductsQuery;
}

export default function IndexPage({ data }: IIndexProps) {
  return (
    <Layout>
      <VStack alignItems={"flex-start"}>
        <Box
          bgImage={{
            base: "linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)) ,url('https://www.canfieldsci.com/common/images/hero/large/home-visia.jpg?2016-mar-15')",
            xl: "url('https://www.canfieldsci.com/common/images/hero/large/home-visia.jpg?2016-mar-15')",
          }}
          bgPosition={"center"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          minH={470}
        >
          <Grid
            templateColumns={{
              lg: "1fr",
              xl: "1fr 2fr",
            }}
          >
            <Text
              p={3}
              py={"30"}
              fontSize={"4xl"}
              color={{
                base: "white",
                xl: "black",
              }}
            >
              Easily capture high-quality, standardized facial images and
              motivate your patients with the excitement of 3D visual tools,
              side by side comparisons, and quantitative analysis
            </Text>
            <Box></Box>
          </Grid>
        </Box>
        {data.allMdx?.nodes?.map((product, idx) => (
          <Stack
            p={{ md: 3 }}
            key={idx}
            display={{ md: "flex" }}
            direction={{ md: "row" }}
          >
            <Box
              flexShrink={0}
              width={{ md: 80 }}
              borderRadius={{ md: "lg" }}
              overflow="hidden"
            >
              <GatsbyImage
                image={
                  getImage(
                    product.frontmatter?.headerImage?.childrenImageSharp[0]
                      ?.gatsbyImageData!
                  ) as any
                }
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="xl"
                letterSpacing="wide"
                color="teal.600"
              >
                {product.frontmatter?.name}
              </Text>

              <Link to={`/products/${product.id}`}>
                <Text
                  mt={1}
                  display="block"
                  fontSize="lg"
                  lineHeight="normal"
                  fontWeight="semibold"
                >
                  More Detail &rarr;
                </Text>
              </Link>
              <Text mt={2} color="gray.500">
                {product.frontmatter?.summary}
              </Text>
            </Box>
          </Stack>
        ))}
      </VStack>
    </Layout>
  );
}

export const query = graphql`
  query Products {
    allMdx {
      nodes {
        id
        frontmatter {
          headerImage {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          name
          summary
        }
      }
    }
  }
`;
export const Head: HeadFC = () => {
  return <title>Innomed|canfield</title>;
};
