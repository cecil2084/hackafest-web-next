"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  PasswordInput,
  Anchor,
  Flex,
  TextInput,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconCheck, IconX } from "@tabler/icons-react";

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
  // const [pass, setPass] = useState("");

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
      test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw),
    },
    {
      label: 'Must NOT contain the word "password"',
      test: (pw: string) => !pw.toLowerCase().includes("password"),
    },
  ];

  const [rev, setRev] = useState(1);

  const results = rules.map((rule) => rule.test(password));
  const allPrevValid = results.slice(0, rev).every((valid) => valid);

  // Reveal next rule if all current visible rules are valid
  if (allPrevValid && rev < rules.length) {
    setTimeout(() => setRev((c) => c + 1), 200);
  }

  // If earlier rule becomes invalid, reduce revealed count
  if (!allPrevValid && rev > 1) {
    const firstInvalidIndex = results.findIndex((r) => !r);
    setTimeout(() => setRev(firstInvalidIndex + 1), 200);
  }

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
        {rules.slice(0, rev).map((rule, index) => {
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

    // <Center bg="#0E1625" h="100vh" w="100vw">
    //   <Paper h="500" miw="802">
    //     <Group
    //       h="100%"
    //       gap="0"
    //       style={{
    //         borderRadius: "8px",
    //         overflow: "hidden",
    //         position: "relative",
    //       }}
    //     >
    //       <Box flex="1" bg="#180A3B" h="100%">
    //         {/* Add your image component here if needed */}
    //       </Box>

    //       <Stack
    //         justify="center"
    //         p="xl"
    //         gap="xl"
    //         bg="#49299A"
    //         h="100%"
    //         flex="1"
    //       >
    //         <Title order={1} style={{ color: "white" }}>Create Your Password</Title>
    //         <PasswordInput
    //           radius="md"
    //           label="Password"
    //           size="md"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           styles={(theme) => ({
    //             visibilityToggle: {
    //               color: "#1A1B1E",
    //             },
    //             input: {
    //               backgroundColor: theme.white,
    //               color: theme.black,
    //               "::placeholder": {
    //                 color: theme.colors.gray[5],
    //                 opacity: 1,
    //               },
    //             },
    //             label: {
    //               color: theme.white,
    //             },
    //           })}
    //         />
    //         <Text color="white" size="sm">
    //           Your password must meet the following criteria:
    //         </Text>
    //         <ul style={{ color: "white" }}>
    //           <li className={validations.minLength ? "text-green-600" : "text-red-600"}>
    //             • At least 8 characters
    //           </li>
    //           <li className={validations.hasUpper ? "text-green-600" : "text-red-600"}>
    //             • Contains an uppercase letter
    //           </li>
    //           <li className={validations.hasLower ? "text-green-600" : "text-red-600"}>
    //             • Contains a lowercase letter
    //           </li>
    //           <li className={validations.hasNumber ? "text-green-600" : "text-red-600"}>
    //             • Contains a number
    //           </li>
    //           <li className={validations.hasSpecial ? "text-green-600" : "text-red-600"}>
    //             • Contains a special character
    //           </li>
    //           <li className={validations.hasRoman ? "text-green-600" : "text-red-600"}>
    //             • Contains a Roman numeral (I, V, X, L, C, D, M)
    //           </li>
    //         </ul>
    //         <Stack gap="xs">
    //           <Button
    //             bg="#180A3B"
    //             radius="md"
    //             w="fit-content"
    //             onClick={() => allValid && router.push("/success")} // redirect when valid
    //             disabled={!allValid}
    //           >
    //             Submit
    //           </Button>
    //         </Stack>
    //       </Stack>
    //     </Group>
    //   </Paper>
    // </Center>
  );
}