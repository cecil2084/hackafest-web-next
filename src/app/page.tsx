"use client";

// import Image from "next/image";
import styles from "@/app/page.module.css";
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import loginGraphic from "@/app/_assets/login_graphic.png";
import novaLogo from "@/app/_assets/nova_logo.png";

export default function Home() {
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
              style={{ position: "absolute", top: "0" }}
              w="100"
            />
            <Image src={loginGraphic.src} />
          </Box>

          <Stack
            justify="center"
            p="xl"
            gap="xl"
            bg="#49299A"
            h="100%"
            flex="1"
          >
            <Title order={1}>Login</Title>
            <TextInput
              label="E-mail"
              placeholder="danieljoe@gmail.com"
              size="md"
              radius="md"
              styles={(theme) => ({
                input: {
                  backgroundColor: theme.white,
                  color: theme.black,

                  "::placeholder": {
                    color: theme.colors.gray[5], // typical placeholder color in light theme
                    opacity: 1,
                  },
                },
                label: {
                  color: theme.white, // keep label styled for dark mode
                },
              })}
            />
            <PasswordInput
              radius="md"
              label="Password"
              size="md"
              styles={(theme) => ({
                input: {
                  backgroundColor: theme.white,
                  color: theme.black,

                  "::placeholder": {
                    color: theme.colors.gray[5], // typical placeholder color in light theme
                    opacity: 1,
                  },
                },
                label: {
                  color: theme.white, // keep label styled for dark mode
                },
              })}
            />
            <Stack gap="xs">
              <Button bg="#180A3B" radius="md" w="fit-content">
                Login
              </Button>
              <Text>
                Don't have an account?{" "}
                <Anchor<"a"> c="#45EDF2" href="/signup">
                  Sign Up
                </Anchor>
              </Text>
            </Stack>
          </Stack>
        </Group>
      </Paper>
    </Center>
  );
}
