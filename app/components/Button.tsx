import { Button, ButtonProps } from "@chakra-ui/react";

export function StyledButton(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button
      bg="#fa1673"
      fontSize="15px"
      fontWeight={500}
      cursor="pointer"
      borderRadius="30px"
      {...rest}
    >
      {children}
    </Button>
  );
}
