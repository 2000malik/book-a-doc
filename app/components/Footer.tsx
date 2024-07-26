import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "./Logo";

type FooterTitleProps = {
  children: React.ReactNode;
};
function FooterTitle({ children, ...props }: FooterTitleProps) {
  return (
    <Text fontSize="16px" fontWeight={600} {...props}>
      {children}
    </Text>
  );
}
interface FooterNavLinkProps extends FooterTitleProps {
  path: string;
}
function FooterNavLink(props: FooterNavLinkProps) {
  const { path, children, ...rest } = props;
  return (
    <Link href={path}>
      <Box display="inline-flex" gap={3}>
        <Text fontSize="14px" fontWeight={400} {...rest}>
          {children}
        </Text>
      </Box>
    </Link>
  );
}
export const Footer = () => {
  return (
    <Box as="footer" h="300px" bg="#101827" color="#fff" py="50" px="90">
      <VStack align="flex-start">
        <HStack
          spacing={{  lg: "150px" }}
          flexDirection={{ base: "column", md: "row" }}
          align="flex-start"
          wrap={{ base: "unset", md: "wrap", lg: "unset" }}
        >
          <VStack align="flex-start" spacing={3}>
            <Logo iconFill="#000" />
            <Text fontSize="14px" fontWeight={400} color="#fff">
              BOOKADOC is a facing web / mobile application where patients{" "}
              <br /> can search and discover providers by Illness, specialist or
              name of the <br /> provider.
            </Text>
          </VStack>
          <VStack align="flex-start" spacing={3}>
            <FooterTitle>SERVICES FOR PATIENTS</FooterTitle>
            <FooterNavLink path="#">Doctor Search</FooterNavLink>
            <FooterNavLink path="#">Appointment Booking</FooterNavLink>
            <FooterNavLink path="#">Patient Reviews</FooterNavLink>
          </VStack>
          <VStack align="flex-start" spacing={3}>
            <FooterTitle>SERVICES FOR DOCTORS</FooterTitle>
            <FooterNavLink path="#">Profile Listing</FooterNavLink>
            <FooterNavLink path="#">Appointment Management</FooterNavLink>
            <FooterNavLink path="#">Patients Feedback</FooterNavLink>
          </VStack>
          <VStack align="flex-start" spacing={3}>
            <FooterTitle>CONTACT US</FooterTitle>
            <Link href="tel:08010001234">(234)801 000 1234</Link>
            <Link href="mailto:kojomalik2000@gmail.com">help@bookadoc.com</Link>
          </VStack>
        </HStack>

        <Divider my={3} />

        <Text fontSize="12px" fontWeight={400} color="#96a2b5">
          BOOKADOC is a facing web / mobile application where patients can
          search and discover providers by Illness, specialist or name of the
          provider. <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ipsum
          nostrum aspernatur ut impedit dignissimos totam aperiam cum. Magni rem
          doloremque dolores <br /> perspiciatis corrupti numquam dolorum
          doloribus ipsum deserunt architecto?
        </Text>
      </VStack>
    </Box>
  );
};
