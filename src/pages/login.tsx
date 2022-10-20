import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { checkCookies, getCookie, getCookies } from "cookies-next";


export default function Login() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"}  py={12} px={12}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account with ORCID</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Center>
            <Link href="/api/orcid">
              <Button
                bg={"green.300"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                size={'lg'}
              >
                Sign in with ORCID
              </Button>
            </Link>
          </Center>
        </Box>
      </Stack>
    </Flex>
  );
}
4
export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie("token", { req, res });
    console.log("cookie Exists:" + cookieExists);
    if (cookieExists) return { redirect: { destination: "/dashboard" } };
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}