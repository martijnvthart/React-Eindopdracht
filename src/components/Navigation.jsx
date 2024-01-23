import React from "react";
import { Link } from "react-router-dom";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <>
      <Flex pt={4} pl={4}>
        <Link to={`/new`}>
          <Button
            w="120px"
            fontWeight={"bold"}
            fontSize={"lg"}
            borderRadius={"md"}
            backgroundColor={"gree.200"}
            _hover={{ backgroundColor: "green.500" }}
            textTransform={"uppercase"}
          >
            Add Event
          </Button>
        </Link>
        <Link to={`/`}>
          <Button
            w="120px"
            ml={5}
            fontWeight={"bold"}
            fontSize={"lg"}
            borderRadius={"md"}
            backgroundColor={"green.200"}
            _hover={{ backgroundColor: "green.500" }}
            textTransform={"uppercase"}
          >
            Home
          </Button>
        </Link>
      </Flex>
      <Center>
        <Heading fontWeight={"semibold"} fontSize={"5xl"} mb={3} mt={3}>
          Event Engine
        </Heading>
      </Center>
    </>
  );
};
