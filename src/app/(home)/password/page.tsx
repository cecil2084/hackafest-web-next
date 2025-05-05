"use client";

import { useState, useEffect } from "react";
import {
  Group,
  Stack,
  Text,
  Title,
  Flex,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

export default function PasswordValidator() {
  const [password, setPassword] = useState("");

  const rules = [
    {
      label: "Password must be at least 10 characters long",
      test: (pw: string) => pw.length >= 10,
    },
    {
      label: "Must include an uppercase letter (A–Z)",
      test: (pw: string) => /[A-Z]/.test(pw),
    },
    {
      label: "Must include a number (0–9)",
      test: (pw: string) => /\d/.test(pw),
    },
    {
      label: "Must include a special character (!@#$...)",
      test: (pw: string) => /[!@#$%^&*(),.?\":{}|<>]/.test(pw),
    },
    {
      label: 'Must NOT contain the word "password"',
      test: (pw: string) => !pw.toLowerCase().includes("password"),
    },
  ];

  const [visibleRules, setVisibleRules] = useState(
    rules.map((_, i) => i === 0) // only the first rule visible at start
  );

  const results = rules.map((rule) => rule.test(password));

  useEffect(() => {
    const newVisibility = [...visibleRules];

    // Reveal next rule if all currently visible rules are valid
    for (let i = 0; i < rules.length - 1; i++) {
      if (visibleRules[i] && results[i] && !visibleRules[i + 1]) {
        newVisibility[i + 1] = true;
        break;
      }
    }

    // Only update if something changed
    if (newVisibility.join() !== visibleRules.join()) {
      setVisibleRules(newVisibility);
    }
  }, [password, visibleRules, results, rules.length]);

  return (
    <Stack p="lg" w="100%" align="center" mt="200">
      <Flex justify="center">
        <Title c="cyan" order={1}>
          Password Panic!
        </Title>
      </Flex>

      <Textarea
        styles={{
          input: {
            fontSize: "24px",
          },
        }}
        autosize
        minRows={1}
        w="650"
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />

      <Stack>
        {rules.map((rule, index) => {
          if (!visibleRules[index]) return null;

          const passed = results[index];

          return (
            <Group key={rule.label} gap="xs">
              <ThemeIcon
                color={passed ? "teal" : "red"}
                size="sm"
                radius="xl"
                variant="light"
              >
                {passed ? <IconCheck size={14} /> : <IconX size={14} />}
              </ThemeIcon>
              <Text
                size="sm"
                c={passed ? "teal" : "red"}
                style={{ textDecoration: passed ? "line-through" : "none" }}
              >
                {rule.label}
              </Text>
            </Group>
          );
        })}
      </Stack>
    </Stack>
  );
}