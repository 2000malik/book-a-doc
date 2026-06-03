'use client';
import { StatCardData } from '@/app/types/dashboard';
import { Box, Text, HStack, Icon, Skeleton } from '@chakra-ui/react';
import { FiUsers, FiEye, FiRadio, FiTrendingUp } from 'react-icons/fi';

const ICON_MAP = {
  followers: FiUsers,
  impressions: FiTrendingUp,
  reach: FiRadio,
  engagement: FiEye,
};

interface StatCardProps {
  data: StatCardData;
  isLoading?: boolean;
}

export const StatCard = ({ data, isLoading }: StatCardProps) => {
  const IconComponent = ICON_MAP[data.iconType];
  const isPositive = (data.changePercent ?? 0) >= 0;

  if (isLoading) {
    return <Skeleton height="140px" borderRadius="2xl" />;
  }

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={6}
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      flex="1"
      minW="160px"
    >
      <Box
        bg="blue.50"
        w={10}
        h={10}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb={4}
      >
        <Icon as={IconComponent} color="blue.500" boxSize={5} />
      </Box>

      <Text fontSize="3xl" fontWeight="800" color="gray.900" lineHeight="1">
        {data.value}
      </Text>
      <Text fontSize="sm" color="gray.500" mt={1}>
        {data.label}
      </Text>

      {data.changePercent !== undefined && (
        <HStack mt={3} spacing={1}>
          <Text
            fontSize="sm"
            fontWeight="600"
            color={isPositive ? 'green.500' : 'red.500'}
          >
            {isPositive ? '▲' : '▼'} {Math.abs(data.changePercent)}%
          </Text>
        </HStack>
      )}
    </Box>
  );
};