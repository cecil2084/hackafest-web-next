"use client";

import {
  Alert,
  Button,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";
import noFace from "@/app/_assets/no_face.png";

export default function PhishingSimulator() {
  const [feedback, setFeedback] = useState<{
    message: string;
    color: "red" | "green";
    title: string;
  } | null>(null);

  const handleValidation = (isFake: boolean) => {
    if (isFake) {
      setFeedback({
        title: "Correct!",
        color: "green",
        message: `This is a phishing email. Here's why:
- The sender address "support@my-unibank-secure.com" is suspicious.
- The subject line uses urgency to trick users.
- It asks you to click a vague link and threatens account suspension.
- Real banks never send messages like this.`,
      });
    } else {
      setFeedback({
        title: "Incorrect",
        color: "red",
        message: `This is actually a phishing email.
Be cautious of:
- Suspicious email domains
- Urgent and threatening language
- Vague call-to-actions like “Reactivate Account Now”
Always verify the sender and avoid clicking unknown links.`,
      });
    }
  };

  return (
    <Stack w="100%" p="xl" align="center" bg="#0E1625" style={{ minHeight: "100vh" }}>
      <Title c="cyan" order={1}>
        Phishing Simulator
      </Title>

      <Stack w="800px" spacing="xl">
        <Stack
          spacing={0}
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #2C3E50",
          }}
        >
          <Group p="md" bg="#14274B" spacing="xs">
            <span style={circleStyle("#FF5F57")} />
            <span style={circleStyle("#FFBD2E")} />
            <span style={circleStyle("#28C940")} />
          </Group>
          <Divider color="#0E1625" />
          <Stack p="lg" bg="#1F345C" spacing="md">
            <Title order={3} c="white">
              [URGENT] Account Access Suspended – Immediate Action Required
            </Title>
            <Group align="flex-start" justify="space-between" wrap="nowrap">
              <Group spacing="sm">
                <Image src={noFace.src} h={50} />
                <Stack gap={0} spacing={0}>
                  <Group gap={4}>
                    <Title order={5} c="white">
                      Unibank
                    </Title>
                    <Text c="gray">
                      &lt;support@my-unibank-secure.com&gt;
                    </Text>
                  </Group>
                  <Text c="gray">to me</Text>
                </Stack>
              </Group>
              <Text c="gray">9:17 AM (5 hours ago)</Text>
            </Group>
            <Text c="white">
              Dear Valued Customer, We detected suspicious activity on your bank
              account and have temporarily suspended access for your protection.
              To restore your account, you must verify your information
              immediately by clicking the link below: 👉{" "}
              <strong>Reactivate Account Now</strong>. Failure to act within 24
              hours will result in permanent account suspension.
              <br />
              <br />
              Thank you for your prompt attention. <br />
              <br />
              Sincerely, <br />
              MyUniBank Security Alert Team 📧{" "}
              <Text span c="gray">
                account.support@my-unibank-secure.com
              </Text>
            </Text>
          </Stack>
        </Stack>

        <Group w="100%" justify="space-between">
          <Button flex="1" color="green" onClick={() => handleValidation(false)}>
            Real
          </Button>
          <Button flex="1" color="red" onClick={() => handleValidation(true)}>
            Fake
          </Button>
        </Group>

        {feedback && (
          <Alert
            icon={<IconAlertCircle size="1rem" />}
            title={feedback.title}
            color={feedback.color}
            radius="md"
            withCloseButton
            onClose={() => setFeedback(null)}
          >
            {feedback.message}
          </Alert>
        )}
      </Stack>
    </Stack>
  );
}

function circleStyle(color: string): React.CSSProperties {
  return {
    backgroundColor: color,
    width: 15,
    height: 15,
    borderRadius: "50%",
  };
}
