import { Card, CardProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type StyledCardProps = CardProps & { children?: ReactNode };

export const StyledCard = ({ children, ...props }: StyledCardProps) => {
  return (
    <Card
      borderRadius="15px"
      border="1px"
      bg="#fff"
      borderColor="#eaebef"
      variant="outlined"
      {...props}
    >
      {children}
    </Card>
  );
};
