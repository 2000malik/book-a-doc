'use client';

import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
  AvatarGroup,
  IconButton,
  Box,
} from '@chakra-ui/react';

import {
  FiSearch,
  FiPlus,
  FiSettings,
} from 'react-icons/fi';

export const DashboardHeader = () => {
  return (
    <Box
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.100"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex
        h="72px"
        maxWidth="1800px"
        mx="auto"
        w="100%"
        px={8}
        align="center"
        justify="space-between"
      >
        <InputGroup maxW="380px">
          <InputLeftElement pointerEvents="none">
            <FiSearch color="#A0AEC0" />
          </InputLeftElement>

          <Input
            placeholder="Search Instagram"
            bg="gray.50"
            border="none"
          />
        </InputGroup>

        <Flex align="center" gap={4}>
          <IconButton
            aria-label="add account"
            icon={<FiPlus />}
            rounded="full"
            size="sm"
            colorScheme="blue"
          />

          <AvatarGroup size="sm" max={3}>
            <Avatar name="User 1" />
            <Avatar name="User 2" />
            <Avatar name="User 3" />
          </AvatarGroup>

          <Box w="1px" h="24px" bg="gray.200" />

          <IconButton
            aria-label="settings"
            icon={<FiSettings />}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  );
};