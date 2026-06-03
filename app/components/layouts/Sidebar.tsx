'use client';
import { VStack, Box, Icon, Tooltip } from '@chakra-ui/react';
import { FiGlobe, FiMessageCircle, FiFileText, FiCamera, FiGrid, FiMoreHorizontal } from 'react-icons/fi';

const NAV_ITEMS = [
  { icon: FiGlobe, label: 'Analytics', active: true },
  { icon: FiMessageCircle, label: 'Messages' },
  { icon: FiFileText, label: 'Content' },
  { icon: FiCamera, label: 'Media' },
  { icon: FiGrid, label: 'Apps' },
  { icon: FiMoreHorizontal, label: 'More' },
];

export const Sidebar = () => (
  <Box
    w="60px"
    bg="white"
    borderRight="1px solid"
    borderColor="gray.100"
    py={6}
    display="flex"
    flexDirection="column"
    alignItems="center"
    gap={5}
    minH="100vh"
  >
    {NAV_ITEMS.map(({ icon, label, active }) => (
      <Tooltip key={label} label={label} placement="right">
        <Box
          w={10} h={10}
          borderRadius="xl"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg={active ? 'blue.50' : 'transparent'}
          cursor="pointer"
          _hover={{ bg: 'gray.100' }}
          transition="all 0.2s"
        >
          <Icon as={icon} color={active ? 'blue.500' : 'gray.400'} boxSize={5} />
        </Box>
      </Tooltip>
    ))}
  </Box>
);