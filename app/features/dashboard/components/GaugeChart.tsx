'use client';
import { MediaPost } from '@/app/types/dashboard';
import { Box, Text, Icon } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

interface Props {
  post: MediaPost;
}

// SVG arc gauge — no extra library needed
export const GaugeChart = ({ post }: Props) => {
  const radius = 80;
  const stroke = 14;
  const normalizedRadius = radius - stroke / 2;
  const circumference = Math.PI * normalizedRadius; // half-circle
  const offset = circumference - (post.percentComplete / 100) * circumference;

  return (
    <Box bg="white" borderRadius="2xl" p={6} boxShadow="sm" border="1px solid" borderColor="gray.100">
      <Text fontWeight="700" fontSize="md" color="gray.800" mb={4}>
        {post.title}
      </Text>

      <Box position="relative" display="flex" justifyContent="center">
        <svg width={radius * 2} height={radius + 20} style={{ overflow: 'visible' }}>
          {/* Background arc */}
          <path
            d={`M ${stroke / 2} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke / 2} ${radius}`}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d={`M ${stroke / 2} ${radius} A ${normalizedRadius} ${normalizedRadius} 0 0 1 ${radius * 2 - stroke / 2} ${radius}`}
            fill="none"
            stroke="#E53E3E"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
          {/* Center icon */}
          <foreignObject x={radius - 16} y={radius - 30} width="32" height="32">
            <Box
              bg="red.50"
              borderRadius="full"
              w={8}
              h={8}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FiHeart} color="red.400" boxSize={4} />
            </Box>
          </foreignObject>
        </svg>
      </Box>

      <Text textAlign="center" fontSize="3xl" fontWeight="800" color="gray.900" mt={2}>
        {(post.likesCount / 1000).toFixed(1)}k
      </Text>
      <Text textAlign="center" fontSize="sm" color="gray.500">
        You are at {post.percentComplete}% of {(post.likesGoal / 1000).toFixed(0)},000 likes
      </Text>
    </Box>
  );
};