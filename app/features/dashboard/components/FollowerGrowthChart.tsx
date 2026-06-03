'use client';
import { FollowerGrowthSummary } from '@/app/types/dashboard';
import { Box, Text, HStack, Badge, Skeleton } from '@chakra-ui/react';
import {
  BarChart, Bar, XAxis, YAxis, ReferenceLine,
  Tooltip, ResponsiveContainer, Cell,
} from 'recharts';

interface Props {
  data: FollowerGrowthSummary | null;
  isLoading: boolean;
}

export const FollowerGrowthChart = ({ data, isLoading }: Props) => {
  if (isLoading || !data) return <Skeleton height="300px" borderRadius="2xl" />;

  return (
    <Box bg="white" borderRadius="2xl" p={6} boxShadow="sm" border="1px solid" borderColor="gray.100">
      <HStack justify="space-between" mb={4}>
        <Text fontWeight="700" fontSize="lg" color="gray.800">
          Follower Growth
        </Text>
      </HStack>

      <HStack mb={4} spacing={2}>
        <Box w={3} h={3} borderRadius="sm" bg="blue.500" />
        <Text fontSize="sm" color="gray.600">
          <strong>{(data.newFollowers / 1000).toFixed(1)}k</strong> new followers
        </Text>
        <Badge colorScheme="green" borderRadius="full" px={3}>
          +{data.growthRate}% growth
        </Badge>
      </HStack>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data.chartData} barSize={22}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
          <YAxis hide />
          <Tooltip />
          <ReferenceLine y={6000} stroke="#CBD5E0" strokeDasharray="4 4" label={{ value: 'GOAL', position: 'right', fontSize: 10 }} />
          <Bar dataKey="followers" radius={[4, 4, 0, 0]}>
            {data.chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={entry.followers > 7000 ? '#3182CE' : '#E2E8F0'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};