import { HStack, Text, TextProps } from "@chakra-ui/react";
import { ArrowDown } from "./icons";
import Link from "next/link";

type NavLinkProps = { to: string; showIcon?: boolean } & TextProps;

export const NavLink = ({ to, showIcon = true, ...props }: NavLinkProps) => {
  const { children, ...rest } = props;
  return (
    <Link href={to}>
      <HStack>
        <Text fontSize="14px" fontWeight="thin" {...rest}>
          {children}
        </Text>
        {showIcon && <ArrowDown />}
      </HStack>
    </Link>
  );
};
