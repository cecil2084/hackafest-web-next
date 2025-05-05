"use client";

import { useState } from "react";
import { Box, Button, Center, Group, Paper, Stack, Text, Title, PasswordInput, Anchor } from "@mantine/core";
import { useRouter } from "next/navigation";

const romanRegex = /[IVXLCDM]/i;
const numberRegex = /\d/;
const upperRegex = /[A-Z]/;
const lowerRegex = /[a-z]/;
const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;

export default function PasswordValidator() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validations = {
    minLength: password.length >= 8,
    hasUpper: upperRegex.test(password),
    hasLower: lowerRegex.test(password),
    hasNumber: numberRegex.test(password),
    hasSpecial: specialRegex.test(password),
    hasRoman: romanRegex.test(password),
  };

  const allValid = Object.values(validations).every(Boolean);

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
            {/* Add your image component here if needed */}
          </Box>

          <Stack
            justify="center"
            p="xl"
            gap="xl"
            bg="#49299A"
            h="100%"
            flex="1"
          >
            <Title order={1} style={{ color: "white" }}>Create Your Password</Title>
            <PasswordInput
              radius="md"
              label="Password"
              size="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              styles={(theme) => ({
                visibilityToggle: {
                  color: "#1A1B1E",
                },
                input: {
                  backgroundColor: theme.white,
                  color: theme.black,
                  "::placeholder": {
                    color: theme.colors.gray[5],
                    opacity: 1,
                  },
                },
                label: {
                  color: theme.white,
                },
              })}
            />
            <Text color="white" size="sm">
              Your password must meet the following criteria:
            </Text>
            <ul style={{ color: "white" }}>
              <li className={validations.minLength ? "text-green-600" : "text-red-600"}>
                • At least 8 characters
              </li>
              <li className={validations.hasUpper ? "text-green-600" : "text-red-600"}>
                • Contains an uppercase letter
              </li>
              <li className={validations.hasLower ? "text-green-600" : "text-red-600"}>
                • Contains a lowercase letter
              </li>
              <li className={validations.hasNumber ? "text-green-600" : "text-red-600"}>
                • Contains a number
              </li>
              <li className={validations.hasSpecial ? "text-green-600" : "text-red-600"}>
                • Contains a special character
              </li>
              <li className={validations.hasRoman ? "text-green-600" : "text-red-600"}>
                • Contains a Roman numeral (I, V, X, L, C, D, M)
              </li>
            </ul>
            <Stack gap="xs">
              <Button
                bg="#180A3B"
                radius="md"
                w="fit-content"
                onClick={() => allValid && router.push("/success")} // redirect when valid
                disabled={!allValid}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Group>
      </Paper>
    </Center>
  );
}
