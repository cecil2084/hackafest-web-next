"use client";

import { Button, Group, Image, Stack, Title } from "@mantine/core";
import brain from "@/app/_assets/brain.svg";
import virus from "@/app/_assets/virus.svg";
import lock from "@/app/_assets/lock.svg";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  return (
    <Stack w="100%" p="lg">
      <Title c="cyan" order={1}>
        Activities
      </Title>

      <Group>
        <Stack
          p="lg"
          align="center"
          w={300}
          style={{
            borderRadius: "15px",
            background: "linear-gradient(180deg, #8859FF 0%, #4800FF 100%)",
            aspectRatio: "1/1",
          }}
        >
          <Title c="white" order={3}>
            Password Strength
          </Title>
          <Image w={200} src={brain.src} />
          <Button
            style={{ alignSelf: "flex-end" }}
            radius="xl"
            variant="white"
            c="#49299A"
          >
            Try Now
          </Button>
        </Stack>

        <Stack
          p="lg"
          align="center"
          w={300}
          style={{
            borderRadius: "15px",
            background: "linear-gradient(180deg, #45EDF2 0%, #C0FDFF 100%)",
            aspectRatio: "1/1",
          }}
        >
          <Title c="#49299A" order={3}>
            Phishing Simulator
          </Title>
          <Image w={200} src={virus.src} />
          <Button
            style={{ alignSelf: "flex-end" }}
            radius="xl"
            variant="filled"
            bg="cyan.7"
            c="white"
            onClick={() => router.push("/phishingSimulator")}
          >
            Try Now
          </Button>
        </Stack>

        <Stack
          p="lg"
          align="center"
          w={300}
          style={{
            borderRadius: "15px",
            background: "linear-gradient(180deg, #E8E8FC 0%, #6400D5 100%)",
            aspectRatio: "1/1",
          }}
        >
          <Title c="#49299A" order={3}>
            Drag Me, Drop Me
          </Title>
          <Image w={200} src={lock.src} />
          <Button
            style={{ alignSelf: "flex-end" }}
            radius="xl"
            variant="white"
            c="#49299A"
          >
            Try Now
          </Button>
        </Stack>
      </Group>
    </Stack>
  );
}
