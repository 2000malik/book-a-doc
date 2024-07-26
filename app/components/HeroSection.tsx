import {
  Box,
  BoxProps,
  Center,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Location, SearchIcon, Stethoscope } from "./icons";
import { StyledButton } from "./Button";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { Logo } from "./Logo";

type SearchTextBadgeProps = {
  text: string;
  icon: ReactNode;
} & BoxProps;

function SearchTextBadge({ text, icon, ...props }: SearchTextBadgeProps) {
  return (
    <HStack {...props}>
      {icon}
      <Text fontSize="12px" fontWeight="normal">
        {text}
      </Text>
    </HStack>
  );
}
function Search() {
  return (
    <Box
      bg="#fff"
      py={3}
      px={5}
      borderRadius="90"
      h="60px"
      w="1200px"
      mt="100px"
      boxShadow="lg"
      color="#000000"
    >
      <Flex justifyContent="space-between">
        <SearchTextBadge icon={<SearchIcon />} text="Migraine" />
        {/* <Box display="flex" borderInline={"solid"} {} gap={100}> */}
        <SearchTextBadge icon={<Location />} text="49129" />
        {/* </Box> */}
        <SearchTextBadge icon={<Location />} text="Agile Health Insurance" />
        <StyledButton color="#fff" w="150px">
          Search
        </StyledButton>
      </Flex>
    </Box>
  );
}
function HeroSection() {
  return (
    <Box
      as="section"
      bg="red"
      m={3}
      px="50px"
      py={3}
      borderRadius="20px"
      bgGradient="linear(to-l, #ece7fe,#fff6f9 )"
      h="240px"
    >
      <Flex justifyContent="space-between">
        <Logo iconFill="#FFFFFF"/>
        <Flex gap={5} alignItems="center" justifyContent="center">
          {["Services", "Doctors"].map((item) => (
            <NavLink key={item} to="#">
              {item}
            </NavLink>
          ))}
          {[" About Us", "Blog", "Contact Us"].map((item) => (
            <NavLink key={item} to="#" showIcon={false}>
              {item}
            </NavLink>
          ))}
        </Flex>
        <Flex gap={4} justifyContent="space-between">
          {["Sign In", "Clinic Sign In"].map((item) => (
            <StyledButton key={item} bg="#fff" fontSize="14px" fontWeight={400}>
              {item}
            </StyledButton>
          ))}
        </Flex>
      </Flex>
      <Center>
        <Search />
      </Center>
    </Box>
  );
}

export default HeroSection;
