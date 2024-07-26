import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CardBody,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { ArrowDown, Calender, User, Location, Info, Star, Map } from "./icons";
import { StyledCard, StyledCardProps } from "./StyledCard";
import Link from "next/link";
import Image from "next/image";
import { StyledButton } from "./Button";
import { StyledCheckBox } from "./CheckBox";

type StyledSelectProps = {
  leftIcon: ReactElement;
  label: string;
};
type CardBadgeProps = StyledCardProps & {
  bg: string;
  iconFill: string;
};
const CLIENT_LIST: string[] = [
  "Shola Ajasa",
  "Malik Ojo",
  "Nike Adebago",
  "Segun Adebayo",
  "Prosper Otemuyiwa",
  "Christian Nwamba",
];
const SESSIONS = [
  { label: "Early Morning (Before 9am)",  },
  { label: "Morning (9am - noon)", isChecked: true },
  { label: "Afternoon (Noon - 4pm)",  },
  { label: "Evening (After Noon)", },
];
function StyledSelect({ leftIcon, label }: StyledSelectProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="#fff"
          borderRadius="10px"
          border="1px"
          borderColor="#eaebef"
          fontSize="12px"
          fontWeight="normal"
          size="md"
          leftIcon={leftIcon}
          rightIcon={<ArrowDown />}
        >
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
function CardBadge({ children, bg, iconFill, ...props }: CardBadgeProps) {
  return (
    <StyledCard
      bg={bg}
      borderColor="transparent"
      py="1"
      px="2"
      mb={3}
      {...props}
    >
      <HStack>
        <Info fill={iconFill} /> {children}
      </HStack>
    </StyledCard>
  );
}
function RatingBadge() {
  return (
    <Box
      overflow="hidden"
      bg="#fcebd6"
      color="#ef6720"
      borderRadius="5"
      display="flex"
      alignItems="center"
      justifyItems="center"
      gap={1}
      p={1}
      h="5"
    >
      <Star fill="#ef6720" />{" "}
      <Text as="span" fontWeight="bold">
        5.00
      </Text>
    </Box>
  );
}
const filterOptions: StyledSelectProps[] = [
  {
    label: "july 2024",
    leftIcon: <Calender />,
  },
  {
    label: "in-Person",
    leftIcon: <User />,
  },
  {
    label: "Agile Health Insurance",
    leftIcon: <User />,
  },
  {
    label: "43718",
    leftIcon: <Location />,
  },
];
const About = () => {
  return (
    <Box
      as="section"
      bg="#f8fbfc"
      m={3}
      px="50px"
      py={5}
      borderRadius="20px"
      h="1140px"
      overflow="hidden"
    >
      <Heading color="#fa1673" my={2}>
        Migraine{" "}
        <Text as="span" color="#000">
          Illness With
        </Text>{" "}
        Agile Health Insurance
      </Heading>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        justifyItems="center"
      >
        <HStack mt={5}>
          {React.Children.toArray(
            filterOptions.map(({ leftIcon, label }) => (
              <StyledSelect label={label} leftIcon={leftIcon} />
            ))
          )}
        </HStack>
        <Text textDecoration="underline" fontSize="12px" fontWeight="normal">
          Clear All Filter
        </Text>
      </Flex>
      <Text my="40px">{"100+ Results"}</Text>
      <HStack spacing="40px" color="#000">
        <VStack w={"75%"}>
          {[...Array(3)].map((_) => (
          <StyledCard key={_} w="full" minH="200px" overflow="hidden">
            <CardBody>
              <CardBadge bg="#fef0c7" iconFill="#c86e4f" fontSize="12px">
                <Text color="#c86e4f">
                  You have an existing appointment with this Doctor
                </Text>
                <Link href="#">
                  <Text as="span" textDecoration="underline">
                    View Details
                  </Text>
                </Link>
              </CardBadge>
              <HStack spacing="20px">
                <Image
                  alt="1"
                  src="/2.jpg"
                  width={150}
                  height={100}
                  style={{ borderRadius: "10px", cursor: "pointer" }}
                />
                <VStack
                  w="full"
                  align="flex-start"
                  fontSize="14"
                  fontWeight="thin"
                >
                  <Text fontWeight="bold">Katherine Carroll, DO</Text>
                  <Text>Primary Care Doctor</Text>
                  <Text>
                    <Location /> 5208 Toney Neck Suite 296
                  </Text>
                  <HStack>
                    <RatingBadge />
                    <Text textDecor="underline">(99 reviews)</Text>
                  </HStack>
                  <HStack>
                    <AvatarGroup size="xs" max={3}>
                      {React.Children.toArray(
                        CLIENT_LIST.map((name) => <Avatar name={name} />)
                      )}
                    </AvatarGroup>
                    <Text>Dyson, and 2+ more insurance accepted</Text>
                  </HStack>
                </VStack>
                <HStack
                  alignItems="flex-start" /* Align items to the top (start) */
                  height="150px" /* Set a height for demonstration */
                >
                  <StyledButton
                    leftIcon={<Info />}
                    bg="#fff"
                    border="1px"
                    borderColor="#eaebef"
                    fontSize="12px"
                    fontWeight="normal"
                    size="md"
                    boxShadow="lg"
                  >
                    More Info
                  </StyledButton>
                  <StyledButton
                    leftIcon={<Calender fill="#fff" />}
                    bg="#000"
                    color="#fff"
                    fontSize="12px"
                    fontWeight="normal"
                    size="md"
                  >
                    Book Again
                  </StyledButton>
                </HStack>
              </HStack>
            </CardBody>
          </StyledCard>
           ))} 
        </VStack>

        <VStack spacing="5" w={"25%"}>
          <StyledCard w="full">
            <CardBody>
              <Image
                alt="map"
                src="/5.png"
                width={350}
                height={150}
                objectFit="cover"
                style={{ borderRadius: "10px", cursor: "pointer" }}
              />
              <Center mt={3}>
                <StyledButton
                  leftIcon={<Map />}
                  bg="#fff"
                  border="1px"
                  borderColor="#eaebef"
                  fontSize="12px"
                  fontWeight="normal"
                  size="md"
                  boxShadow="lg"
                >
                  View In Map
                </StyledButton>
              </Center>
            </CardBody>
          </StyledCard>
          <StyledCard w="full" h="60%">
            <CardBody fontSize="14" fontWeight="bold">
              <Text>All Filters</Text>
              <Divider my={3} />
              <Text>Preferred Time</Text>
              <VStack align="flex-start" spacing="3">
                {SESSIONS.map(({ label, isChecked }) => (
                  <StyledCheckBox
                    key={label}
                    label={label}
                    isChecked={isChecked}
                  />
                ))}
              </VStack>
              <Text>Provider Gender</Text>
              <Text>Visitation reason</Text>
              <Text>Specialty</Text>
              <Text>Rating / Review</Text>
              <Text>Language Spoken</Text>
            </CardBody>
          </StyledCard>
        </VStack>
      </HStack>
    </Box>
  );
};

export default About;
