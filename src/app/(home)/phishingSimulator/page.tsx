import {
  Button,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import noFace from "@/app/_assets/no_face.png";

export default function PhishingSimulator() {
  return (
    <Stack w="100%" p="lg">
      <Title c="cyan" order={1}>
        Phishing Simulator
      </Title>

      <Stack w="800" style={{ alignSelf: "center" }}>
        <Stack
          mt="50"
          gap="0"
          style={{
            overflow: "hidden",
            borderRadius: "8px",
          }}
          w="100%"
        >
          <Group p="lg" bg="#14274B" h="fit-content" w="100%" gap="8">
            <span
              style={{
                background: "#FF5F57",
                width: "15px",
                height: "15px",
                borderRadius: "999px",
              }}
            />

            <span
              style={{
                background: "#FFBD2E",
                width: "15px",
                height: "15px",
                borderRadius: "999px",
              }}
            />

            <span
              style={{
                background: "#28C940",
                width: "15px",
                height: "15px",
                borderRadius: "999px",
              }}
            />
          </Group>
          <Divider color="0E1625" />
          <Stack bg="#1F345C">
            <Stack p="lg">
              <Title order={3}>
                [URGENT] Account Access Suspended – Immediate Action Required
              </Title>
              <Group align="flex-start" justify="space-between">
                <Group>
                  <Image src={noFace.src} h="50" />
                  <Stack gap="0">
                    <Group gap="4">
                      <Title order={5}>Unibank</Title>
                      <Text>&lt;support@my-unibank-secure.com&gt;</Text>
                    </Group>
                    <Text>to me</Text>
                  </Stack>
                </Group>

                <Text>9:17 AM (5 hours ago)</Text>

                <Text>
                  Dear Valued Customer, We detected suspicious activity on your
                  bank account and have temporarily suspended access for your
                  protection. To restore your account, you must verify your
                  information immediately by clicking the link below: 👉
                  Reactivate Account Now Failure to act within 24 hours will
                  result in permanent account suspension. Thank you for your
                  prompt attention. Sincerely,MyUniBank Security Alert Team 📧
                  account.support@my-unibank-secure.com
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Stack>

        <Group w="100%" justify="space-between">
          <Button flex="1" color="green">
            Real
          </Button>
          <Button flex="1" color="red">
            Fake
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
}
