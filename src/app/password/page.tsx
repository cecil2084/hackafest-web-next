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
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import Link from "next/link";
import novaLogo from "@/app/_assets/nova_logo.png";
import loginGraphic from "@/app/_assets/login_graphic.png";
import { useState, useEffect } from "react";

interface ValidationRules {
  minLength: number;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

const validationRules: ValidationRules = {
  minLength: 8,
  hasUppercase: true,
  hasLowercase: true,
  hasNumber: true,
  hasSpecialChar: true,
};

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = (value: string) => {
    const newErrors: string[] = [];

    if (value.length < validationRules.minLength) {
      newErrors.push(`Must be at least ${validationRules.minLength} characters`);
    }
    if (validationRules.hasUppercase && !/[A-Z]/.test(value)) {
      newErrors.push("Must contain at least one uppercase letter");
    }
    if (validationRules.hasLowercase && !/[a-z]/.test(value)) {
      newErrors.push("Must contain at least one lowercase letter");
    }
    if (validationRules.hasNumber && !/[0-9]/.test(value)) {
      newErrors.push("Must contain at least one number");
    }
    if (validationRules.hasSpecialChar && !/[^A-Za-z0-9]/.test(value)) {
      newErrors.push("Must contain at least one special symbol");
    }

    setPasswordErrors(newErrors);
    setIsPasswordValid(newErrors.length === 0 && value.length > 0);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.currentTarget.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = event.currentTarget.value;
    setConfirmPassword(newConfirmPassword);
  };

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError(null);
    }
  }, [password, confirmPassword]);

  const canSubmit = isPasswordValid && !confirmPasswordError && password.length > 0 && confirmPassword.length > 0;

  const handleSubmit = () => {
    if (canSubmit) {
      // Handle your signup logic here
      console.log("Signing up with:", password, confirmPassword);
    } else {
      // Optionally display a global error message
      console.log("Please fix the errors in the form.");
    }
  };

  return (
    <Center bg="#0E1625" h="100vh" w="100vw">
      <Paper h="auto" miw="802">
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
              value={password}
              onChange={handlePasswordChange}
              error={passwordErrors.length > 0 && (
                <List size="xs" mt={5}>
                  {passwordErrors.map((error, index) => (
                    <List.Item
                      key={index}
                      icon={
                        <ThemeIcon color="red" size={14} radius="xl">
                          <IconX size={10} />
                        </ThemeIcon>
                      }
                    >
                      {error}
                    </List.Item>
                  ))}
                </List>
              )}
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
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={confirmPasswordError}
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
                width: "25%",
                fontWeight: "bold",
              }}
              onClick={handleSubmit}
              disabled={!canSubmit}
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
