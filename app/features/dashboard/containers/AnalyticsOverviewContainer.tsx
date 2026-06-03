'use client';
import { SimpleGrid, HStack, Text, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { StatCard } from '../components/StatCard';
import { useAnalytics } from '../hooks/useAnalytics';

export const AnalyticsOverviewContainer = () => {
  const [period, setPeriod] = useState('Last 30 days');
  const { data, isLoading } = useAnalytics(period);

  return (
    <div>
      <HStack justify="space-between" mb={5}>
        <Text fontSize="xl" fontWeight="800" color="gray.900">
          Analytics Overview
        </Text>
        <Select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          size="sm"
          w="160px"
          borderRadius="xl"
        >
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </Select>
      </HStack>

      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
        {isLoading
          ? Array(4).fill(0).map((_, i) => <StatCard key={i} data={{} as any} isLoading />)
          : data?.stats.map((stat) => <StatCard key={stat.id} data={stat} />)
        }
      </SimpleGrid>
    </div>
  );
};