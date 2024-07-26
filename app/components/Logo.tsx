import { Box, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Stethoscope } from "./icons";
type LogoIconProps = {
  iconFill?: string;
};
function StethoScopeBade({ iconFill }: LogoIconProps) {
  return (
    <Box
      bg="#fa1673"
      p={2}
      borderRadius="90%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      maxW="40px"
    >
      <Stethoscope fill={iconFill} />
    </Box>
  );
}
export const Logo = ({ iconFill }: LogoIconProps) => {
  return (
    <Link href="/">
      <Flex gap={2} alignItems="center" justifyContent="center">
        <StethoScopeBade iconFill={iconFill} />{" "}
        <Heading as="h6" fontSize="16px">
          BookADoc
        </Heading>
      </Flex>
    </Link>
  );
};
