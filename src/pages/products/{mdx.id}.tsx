import { Box, Grid, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

interface IProductProps {
  data: Queries.ProductDetailQuery;
  children: any;
}
export default function ProductDetail({ data, children }: IProductProps) {
  console.log(
    data?.mdx?.frontmatter?.headerImage?.childImageSharp?.original?.src
  );
  const [detailImage, setDetailImage] = useState<any>(null);
  useEffect(() => {
    const loadedImage =
      data?.mdx?.frontmatter?.headerImage?.childImageSharp?.original?.src;
    setDetailImage(loadedImage);
  }, [data]);
  return (
    <Layout>
      <Box
        position={"relative"}
        bgGradient="linear(to-r, rgba(0, 0, 0, 0.527),  rgba(0, 0, 0, 1))"
        bgImage={detailImage}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        minH={470}
      >
        <Box position={"absolute"} top={0} left={0} minH={470}>
          <Grid
            templateColumns={{
              lg: "1fr",
              xl: "1fr 2fr",
            }}
          >
            <Text
              minH={460}
              p={3}
              py={"30"}
              fontSize={"4xl"}
              color={"gray.200"}
              bgGradient="linear(to-l, rgba(255, 255, 255, 0.527), rgba(0, 0, 0, 0.9))"
            >
              {data?.mdx?.frontmatter?.summary!}
            </Text>
            <Box></Box>
          </Grid>
        </Box>
      </Box>
      <Grid
        p={5}
        mt={3}
        gap={3}
        templateColumns={{
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "repeat(4,1fr)",
        }}
      >
        {children}
      </Grid>
    </Layout>
  );
}

export const query = graphql`
  query ProductDetail($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        name
        summary
        headerImage {
          childImageSharp {
            gatsbyImageData
            original {
              src
            }
          }
        }
      }
    }
  }
`;

export function Head() {
  return <title>Innomed-Canfield</title>;
}
