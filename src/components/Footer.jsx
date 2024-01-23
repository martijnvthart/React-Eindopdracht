import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box backgroundColor={"green.400"} mt={4}>
        <Text
          textAlign={"center"}
          fontStyle={"italic"}
          fontSize={"sm"}
          textColor={"green.300"}
          pb={3}
        >
          Martijn van 't Hart - 2024
        </Text>
      </Box>
    </>
  );
};
