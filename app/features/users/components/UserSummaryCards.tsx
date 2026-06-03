'use client';

import {
  SimpleGrid,
  Box,
  Text,
} from '@chakra-ui/react';

interface Props {
  users: number;
  active: number;
  doctors: number;
  admins: number;
}

export const UserSummaryCards = ({
  users,
  active,
  doctors,
  admins,
}: Props) => {
  const cards = [
    { label: 'Total Users', value: users },
    { label: 'Active Users', value: active },
    { label: 'Doctors', value: doctors },
    { label: 'Admins', value: admins },
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={5}>
      {cards.map(card => (
        <Box
          key={card.label}
          bg="white"
          p={6}
          borderRadius="2xl"
          border="1px solid"
          borderColor="gray.100"
        >
          <Text color="gray.500">
            {card.label}
          </Text>

          <Text
            fontSize="3xl"
            fontWeight="700"
            mt={2}
          >
            {card.value}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};