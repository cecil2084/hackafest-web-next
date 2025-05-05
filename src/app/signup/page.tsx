// /app/signup/page.tsx

"use client";

import {
  Anchor,
  Box,
  Button,
  Group,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  Paper,
  Center,
} from "@mantine/core";
import Link from "next/link";
import novaLogo from "@/app/_assets/nova_logo.png";
import loginGraphic from "@/app/_assets/login_graphic.png";

export default function SignUp() {
  return (
    <Center bg="#0E1625" h="100vh" w="100vw">
      <Paper h="500" miw="802">
        <Group
          h="100%"
          gap="0"
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box flex="1" bg="#180A3B" h="100%">
            <Image
              src={novaLogo.src}
              alt="Nova Logo"
              style={{ position: "absolute", top: "0" }}
              w="100"
            />
            <Image src={loginGraphic.src} alt="Sign Up Graphic" />
          </Box>

          <Stack
            justify="center"
            p="xl"
            gap="md"
            bg="#49299A"
            h="100%"
            flex="1"
            style={{ color: "white" }}
          >
            <Title order={2} style={{ color: "white" }}>
              Sign Up
            </Title>

            <TextInput
              label="E-mail"
              placeholder="danieljoe@gmail.com"
              size="md"
              radius="md"
              required
              styles={{
                label: { color: "white" },
                input: {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              size="md"
              radius="md"
              required
              styles={{
                label: { color: "white" },
                input: {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />

            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm your password"
              size="md"
              radius="md"
              required
              styles={{
                label: { color: "white" },
                input: {
                  backgroundColor: "white",
                  color: "black",
                },
              }}
            />

            <Button
              radius="xl"
              size="md"
              bg="#180A3B"
              color="white"
              style={{
                borderRadius: "999px",
                width: "25%", // 1/4 width
                fontWeight: "bold",
              }}
            >
              Sign-Up
            </Button>

            <Text size="sm">
              Already have an account?{" "}
              <Link href="/login" passHref>
                <Anchor c="#45EDF2">Log In</Anchor>
              </Link>
            </Text>
          </Stack>
        </Group>
      </Paper>
    </Center>
  );
}
