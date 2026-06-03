import { HStack, Box, VStack } from "@chakra-ui/react";
import { Sidebar } from "../components/layouts/Sidebar";
import { DashboardHeader } from "../components/layouts/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HStack align="stretch" minH="100vh" spacing={0} bg="gray.50">
      <Sidebar />

      <VStack flex={1} spacing={0} align="stretch">
        <DashboardHeader />

        <Box flex={1} overflowY="auto" p={8}>
          <Box maxWidth="1800px" mx="auto" h="100%" w="100%">
            {children}
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
}
